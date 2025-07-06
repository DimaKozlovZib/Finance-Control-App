from typing import Annotated
from redis.asyncio import from_url, Redis
from fastapi import Depends

from app.core.config import settings


async def get_redis():
    redis = await from_url(settings.REDIS_URL, encoding="utf-8", decode_responses=True)
    try:
        yield redis
    finally:
        await redis.close()


RedisSessionDepends = Annotated[Redis, Depends(get_redis)]


def redisEmailKey(email: str):
    return f"EMAIL-{email}"
