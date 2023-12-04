from django.db import models

# Create your models here.
class Achievement(models.Model):
  Description = models.TextField()
  AchievementAssignment_id = models.ForeignKey('AchievementAssignment', on_delete=models.CASCADE)

class AchievementAssignment(models.model):
  Achievement_id = models.ForeignKey(Achievement, on_delete=models.CASCADE)
  # User_id = models.ForeignKey(User, on_delete=models.CASCADE)