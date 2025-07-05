from contextlib import asynccontextmanager
import uvicorn
from fastapi import FastAPI
from fastapi.routing import APIRoute
from starlette.middleware.cors import CORSMiddleware
from app.api.routers import api_router
from app.core.config import settings


def custom_generate_unique_id(route: APIRoute) -> str:
    return f"{route.tags[0] if route.tags else 'Route'}-{route.name}"


app = FastAPI(generate_unique_id_function=custom_generate_unique_id)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)


def main() -> None:
    uvicorn.run(app=app, host=settings.API_HOST, port=settings.API_PORT)


if __name__ == "__main__":
    main()
