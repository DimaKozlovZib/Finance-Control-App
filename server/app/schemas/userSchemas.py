from pydantic import BaseModel, EmailStr


class UserRegistrationRequest(BaseModel):
    email: EmailStr
    password: str
    name: str
    sex: bool
    verifyCode: str


class UserRegistrationResponse(BaseModel):
    token: str
    message: str


class UserCreate(BaseModel):
    email: EmailStr
    hash_password: str
    name: str
    sex: bool


class UserCreateResponse(UserRegistrationRequest):
    id: int


class UserEmail(BaseModel):
    email: EmailStr
