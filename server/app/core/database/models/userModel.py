from typing import TYPE_CHECKING
from sqlalchemy import Boolean, Integer, String

from app.core.database.session import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.core.database.models.transactionModel import Transaction

class User(Base):
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String)
    name: Mapped[str] = mapped_column(String, nullable=False)
    sex: Mapped[bool] = mapped_column(Boolean, nullable=False)
    
    transactions: Mapped[list["Transaction"]] = relationship(
        "Transactions",
        back_populates="transaction",
        cascade="all, delete-orphan"
    )