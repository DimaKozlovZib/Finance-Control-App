import os
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DB_USER: str
    DB_PASSWORD: str
    DB_HOST: str
    DB_PORT: int
    DB_NAME: str

    API_PORT: int
    API_HOST: str

    JWT_KEY: str
    ACCESS_TOKEN_LIMIT: int
    REFRESH_tOKEN_LIMIT: int

    REDIS_URL: str

    SMTP_SERVER: str
    SMTP_PORT: int
    SERVER_EMAIL: str
    EMAIL_PASSWORD: str

    CELERY_BROKER_URL: str

    model_config = SettingsConfigDict(
        env_file=os.path.join(
            os.path.dirname(os.path.abspath(__file__)), "..", "..", ".env"
        )
    )

    def get_db_url(self):
        return (
            f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASSWORD}@"
            f"{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )


settings = Settings()

__all__ = "settings"
