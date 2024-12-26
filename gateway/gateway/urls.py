from django.urls import path, include

urlpatterns = [
    path('auth/', include('auth_service.urls')),  # Microservicio de autenticación
    path('crud/', include('crud_service.urls')),  # Microservicio CRUD
]
