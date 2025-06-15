from pydantic import EmailStr
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database.models.userModel import User
from app.schemas.userSchemas import UserCreate, UserCreateResponse


async def create_user(db: AsyncSession, user: UserCreate) -> UserCreateResponse:
    db_user = User(**user.model_dump())
    db.add(db_user)
    
    await db.commit()
    await db.refresh(db_user)
    
    return UserCreateResponse(**db_user.__dict__)

async def get_user_by_email(db: AsyncSession, email: EmailStr) -> UserCreateResponse:
    user = await db.execute(select(User).where(User.email == email))
    print(user.__dict__)
    
    return UserCreateResponse(**user.__dict__)