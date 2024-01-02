from django.db import models

# Create your models here.

class Register(models.Model):
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    role = models.CharField(max_length=200)


class Rating(models.Model):
    tripId = models.IntegerField()
    rating = models.FloatField()
    feedback = models.TextField()
    epoch = models.BigIntegerField()


class Ride(models.Model):
    tripId = models.IntegerField()
    pickup = models.CharField(max_length=200)
    drop = models.CharField(max_length=200)
    epoch = models.BigIntegerField()