from fastapi import FastAPI

from src.api.v1.router import router as router_v1

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"]
)

app.include_router(router_v1)
