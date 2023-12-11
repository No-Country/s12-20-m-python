from django.contrib import admin
from .models import UserProfile, Country, Adoption, FollowUp
# Register your models here.

models_to_register = (UserProfile, Country, Adoption, FollowUp)

admin.site.register(models_to_register)