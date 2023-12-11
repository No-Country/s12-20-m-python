from rest_framework import serializers
from .models import Achievement, AchievementAssignment

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'

class AchievementAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AchievementAssignment
        fields = '__all__'
