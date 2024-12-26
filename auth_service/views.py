from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MongoDB
import bcrypt
import jwt
from decouple import config

class RegisterView(APIView):
    def post(self, request):
        data = request.data
        hashed_password = bcrypt.hashpw(data["password"].encode('utf-8'), bcrypt.gensalt())
        MongoDB.users.insert_one({
            "username": data["username"],
            "password": hashed_password
        })
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request):
        data = request.data
        user = MongoDB.users.find_one({"username": data["username"]})
        if user and bcrypt.checkpw(data["password"].encode('utf-8'), user["password"]):
            token = jwt.encode({"username": user["username"]}, config("SECRET_KEY"), algorithm="HS256")
            return Response({"token": token}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
