from random import choices
from fastapi import APIRouter, HTTPException, Response, status
from app.core.database.session import SessionDepends
from app.crud.user import create_user, get_user_by_email
from app.schemas.userSchemas import (
    UserEmail,
    UserRegistrationRequest,
    UserRegistrationResponse,
)
from app.core.jwt import jwt_token
from app.core.config import settings
from app.core.redis import RedisSessionDepends, redisEmailKey
from app.core.celery import send_verification_email


router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/registration", status_code=200, response_model=UserRegistrationResponse)
async def registration(
    user: UserRegistrationRequest,
    response: Response,
    db: SessionDepends,
    redis: RedisSessionDepends,
):
    try:
        checkUser = await get_user_by_email(db, user.email)
        if checkUser:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, detail="Email already in use"
            )

        code: str = await redis.get(redisEmailKey(user.email))
        if code == user.verifyCode:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, detail="Wrong verify code"
            )

        new_user = await create_user(db, user)

        access = jwt_token(timeLimitHours=settings.ACCESS_TOKEN_LIMIT).get_token(
            new_user
        )
        refresh = jwt_token(timeLimitHours=settings.REFRESH_tOKEN_LIMIT).get_token(
            new_user
        )

        response.set_cookie(
            key="refresh_token",
            value=f"Bearer {refresh}",
            httponly=True,
            max_age=settings.REFRESH_tOKEN_LIMIT * 60 * 60,
            secure=True,
            samesite="lax",
        )

        return UserRegistrationResponse(
            message="User registered successfully", token=access
        )

    except HTTPException:
        raise


@router.post("/setVerifyEmailCode", status_code=200)
async def setVerifyEmailCode(
    data: UserEmail, db: SessionDepends, redis: RedisSessionDepends
):
    try:
        checkUser = await get_user_by_email(db, data.email)
        if checkUser:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, detail="Email already in use"
            )

        randomCode = "".join(choices("0123456789", k=5))  # рандомное пятизначное число
        await redis.set(redisEmailKey(data.email), randomCode)

        send_verification_email.delay(data.email, randomCode)

        return {"message": "Email sent"}
    except HTTPException:
        raise
