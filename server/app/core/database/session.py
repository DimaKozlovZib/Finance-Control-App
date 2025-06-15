from datetime import datetime
from typing import Annotated
from fastapi import Depends
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncAttrs
from sqlalchemy.orm import DeclarativeBase, declared_attr, Mapped, mapped_column

from sqlalchemy import func

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings


engine = create_async_engine(settings.get_db_url(), pool_pre_ping=True, echo=True)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)


class Base(AsyncAttrs, DeclarativeBase):
    __abstract__ = True
    
    created_at: Mapped[datetime] = mapped_column(server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(server_default=func.now(), onupdate=func.now())
    
    @declared_attr.directive
    def __tablename__(cls) -> str:
        return f"{cls.__name__.lower()}s"
    
def get_db():
    db = async_session_maker()
    try:
        yield db
    finally:
        db.close()

SessionDepends = Annotated[AsyncSession, Depends(get_db)]