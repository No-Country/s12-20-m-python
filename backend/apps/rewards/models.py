from django.db import models
# Users 
from apps.users.models import UserProfile

# Create your models here.
class Achievement(models.Model):
  description = models.TextField()
  achievementAssignment_id = models.ForeignKey('AchievementAssignment', on_delete=models.CASCADE)

class AchievementAssignment(models.Model):
  achievement_id = models.ForeignKey(Achievement, on_delete=models.CASCADE)
  user_id = models.ForeignKey(UserProfile, on_delete=models.CASCADE)