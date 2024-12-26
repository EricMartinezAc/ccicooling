from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MongoDB

class ResourceListView(APIView):
    def get(self, request):
        resources = list(MongoDB.resources.find({}, {"_id": 0}))
        return Response(resources, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data
        MongoDB.resources.insert_one(data)
        return Response({"message": "Resource created successfully"}, status=status.HTTP_201_CREATED)

class ResourceDetailView(APIView):
    def get(self, request, resource_id):
        resource = MongoDB.resources.find_one({"id": resource_id}, {"_id": 0})
        if resource:
            return Response(resource, status=status.HTTP_200_OK)
        return Response({"error": "Resource not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, resource_id):
        MongoDB.resources.update_one({"id": resource_id}, {"$set": request.data})
        return Response({"message": "Resource updated successfully"}, status=status.HTTP_200_OK)

    def delete(self, request, resource_id):
        MongoDB.resources.delete_one({"id": resource_id})
        return Response({"message": "Resource deleted successfully"}, status=status.HTTP_200_OK)
