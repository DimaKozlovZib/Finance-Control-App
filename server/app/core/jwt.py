import datetime
from pytz import timezone
from jose import jwt
from app.core.config import settings


class TokenData:
    id: int
    email: str


class jwt_token:
    def __init__(self, timeLimitHours: int):
        self.timeLimitHours = timeLimitHours

    def get_token(self, data: TokenData) -> str:
        to_encode = data.copy()
        expire = datetime.now(timezone.utc) + datetime.timedelta(
            hours=self.timeLimitHours
        )

        to_encode.update({"exp": expire})

        encoded_jwt = jwt.encode(to_encode, settings.JWT_KEY, algorithm="HS256")

        return encoded_jwt
