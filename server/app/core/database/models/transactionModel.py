from datetime import datetime
from typing import TYPE_CHECKING
from sqlalchemy import DateTime, ForeignKey, Integer, String

from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database.models.base import Base

if TYPE_CHECKING:
    from app.core.database.models.userModel import User

class FinTransaction(Base):
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    amount: Mapped[int] = mapped_column(Integer, nullable=False)
    comment: Mapped[str] = mapped_column(String, nullable=True)
    date: Mapped[datetime] = mapped_column(DateTime, nullable=False)
    type: Mapped[int] = mapped_column(Integer, nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    
    user: Mapped["User"] = relationship(
        "User",
        back_populates="fintransactions"
    )