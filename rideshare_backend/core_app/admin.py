from django.contrib import admin

# Register your models here.
from .models import Rating, Register, Ride

admin.site.register(Rating)
admin.site.register(Register)
admin.site.register(Ride)
