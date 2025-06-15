from fastapi import APIRouter, Depends, HTTPException, status
from jose import jwt

from app.core.database.session import SessionDepends
from app.crud.user import create_user, get_user_by_email
from app.schemas.userSchemas import UserRegistrationRequest


router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/registration", status_code=200)
async def registration(user:UserRegistrationRequest, db: SessionDepends):
    
    f = get_user_by_email(db, user.email)
