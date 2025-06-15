from fastapi import APIRouter

from app.api.endpoints import (
    auth,
)

api_router = APIRouter()

for router in (
    auth.router,
):
    api_router.include_router(router)


__all__ = ("api_router")
