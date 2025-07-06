from typing import Annotated
from fastapi import Depends
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncAttrs

from sqlalchemy import func

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings


engine = create_async_engine(settings.get_db_url(), pool_pre_ping=True, echo=True)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)
    
async def get_db():
    db = async_session_maker()
    try:
        yield db
    finally:
        await db.close()

SessionDepends = Annotated[AsyncSession, Depends(get_db)]