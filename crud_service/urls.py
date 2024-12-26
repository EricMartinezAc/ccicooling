from django.urls import path
from .views import ResourceListView, ResourceDetailView

urlpatterns = [
    path('', ResourceListView.as_view(), name='resource_list'),
    path('<str:resource_id>/', ResourceDetailView.as_view(), name='resource_detail'),
]
