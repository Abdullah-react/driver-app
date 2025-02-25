from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from . import views

urlpatterns = [
  path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
]