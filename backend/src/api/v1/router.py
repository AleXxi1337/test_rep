from fastapi import APIRouter
from src.api.v1.endpoints.test import router as test_router



router = APIRouter(prefix="/v1")
router.include_router(test_router, tags=["Test"])