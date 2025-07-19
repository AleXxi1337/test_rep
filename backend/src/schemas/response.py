from pydantic import BaseModel


class TestResponse(BaseModel):
    text1: str
    text2: str
