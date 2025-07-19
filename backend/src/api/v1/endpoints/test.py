from fastapi import APIRouter
from src.schemas.response import TestResponse



router = APIRouter(prefix="/test")


@router.get("/get_text")
async def get_text() -> TestResponse:
    return TestResponse(
        text1="Abobus",
        text2="Zhopa"
    )