from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from app.services.crud_services import UserService
from app.serializers import UserSerializer

class UserView(APIView):
    def get(self, request):
        users = UserService.get_users()
        return Response(users, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user_id = UserService.create_user(serializer.validated_data)
            return Response({"id": str(user_id)}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
