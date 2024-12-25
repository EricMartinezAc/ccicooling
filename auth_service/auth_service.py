from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
from utils.security import verify_password
import os
import jwt
from datetime import datetime, timedelta

app = FastAPI()

# Conexión a MongoDB
client = MongoClient(os.getenv("MONGODB_URI"))
db = client[os.getenv("DATABASE_NAME")]

SECRET_KEY = os.getenv("SECRET_KEY", "mysecret")

class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/login")
async def login(user: UserLogin):
    if not user.email or not user.password:
        raise HTTPException(status_code=400, detail="Missing email or password")

    # Buscar usuario
    user_data = db.users.find_one({"email": user.email})
    if not user_data or not verify_password(user.password, user_data["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Generar token JWT
    token = jwt.encode(
        {
            "email": user_data["email"],
            "exp": datetime.utcnow() + timedelta(hours=1),
        },
        SECRET_KEY,
        algorithm="HS256",
    )
    return {"token": token}
