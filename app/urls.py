from django.urls import path
from app.views import UserView

urlpatterns = [
    path("users/", UserView.as_view(), name="user-list"),
]
