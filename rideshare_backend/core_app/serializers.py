from rest_framework import serializers
from .models import *


class RideSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'tripId',
            'pickup',
            'drop',
            'epoch'
        )
        model = Ride


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
           'id', 'name', 'password', 'role'
        )
        model = Register


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'tripId',
            'rating',
            'feedback',
            'epoch'
        )
        model = Rating