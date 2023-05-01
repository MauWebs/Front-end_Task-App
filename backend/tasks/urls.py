from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.getTasks),
    path('get/<int:pk>/', views.getSoloTask),
    path('post/', views.addTask),
    path('put/<int:pk>/', views.putTask),
    path('delete/<int:pk>/', views.deleteTask),
]
