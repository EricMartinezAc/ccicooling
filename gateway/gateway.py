from fastapi import FastAPI
import httpx

app = FastAPI()

USER_SERVICE_URL = "http://user_service:5001"
AUTH_SERVICE_URL = "http://auth_service:5002"

@app.post("/register")
async def register(user: dict):
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{USER_SERVICE_URL}/register", json=user)
        return response.json()

@app.post("/login")
async def login(user: dict):
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{AUTH_SERVICE_URL}/login", json=user)
        return response.json()
