from django.urls import path

from . import views

urlpatterns = [
    path('register', views.ListRegister.as_view()),
    path('register/<int:pk>/', views.DetailRegister.as_view()),
    path('ride', views.ListRide.as_view()),
    path('ride/<int:pk>/', views.DetailRide.as_view()),
    path('rating', views.ListRating.as_view()),
    path('rating/<int:pk>/', views.DetailRating.as_view()),
]