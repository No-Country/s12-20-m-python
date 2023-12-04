from django.contrib import admin
from .models import User, Country, Adoption, FollowUp
# Register your models here.

models_to_register = (User, Country, Adoption, FollowUp)

admin.site.register(models_to_register)