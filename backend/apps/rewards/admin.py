from django.contrib import admin
# Models
from .models import Achievement, AchievementAssignment

admin.site.register(Achievement)
admin.site.register(AchievementAssignment)