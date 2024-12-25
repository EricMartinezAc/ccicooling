import bcrypt
import os
from pymongo import MongoClient

client = MongoClient(os.getenv("MONGODB_URI"))
db = client[os.getenv("DATABASE_NAME")]
users_collection = db["users"]

class UserService:
    @staticmethod
    def register_user(name, email, password):
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        user = {
            "name": name,
            "email": email,
            "password": hashed_password.decode('utf-8')
        }
        users_collection.insert_one(user)
        return {"message": "User registered successfully"}

    @staticmethod
    def authenticate_user(email, password):
        user = users_collection.find_one({"email": email})
        if user and bcrypt.checkpw(password.encode('utf-8'), user["password"].encode('utf-8')):
            return user
        return None
