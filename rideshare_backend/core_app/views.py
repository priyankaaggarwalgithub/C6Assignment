from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import *
from .serializers import RideSerializer, RegisterSerializer, RatingSerializer


class ListRide(generics.ListCreateAPIView):
    queryset = Ride.objects.all()
    serializer_class = RideSerializer


class DetailRide(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ride.objects.all()
    serializer_class = RideSerializer

class ListRegister(generics.ListCreateAPIView):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer


class DetailRegister(generics.RetrieveUpdateDestroyAPIView):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer


class ListRating(generics.ListCreateAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer


class DetailRating(generics.RetrieveUpdateDestroyAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer