from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
from utils.security import hash_password
import os

app = FastAPI()

# Conexión a MongoDB
client = MongoClient(os.getenv("MONGODB_URI"))
db = client[os.getenv("DATABASE_NAME")]

class User(BaseModel):
    email: str
    password: str

@app.post("/register")
async def register_user(user: User):
    if not user.email or not user.password:
        raise HTTPException(status_code=400, detail="Missing email or password")

    # Verificar si el usuario ya existe
    if db.users.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="User already exists")

    # Hash de la contraseña
    hashed_password = hash_password(user.password)

    # Crear el usuario
    db.users.insert_one({"email": user.email, "password": hashed_password})
    return {"message": "User registered successfully"}
