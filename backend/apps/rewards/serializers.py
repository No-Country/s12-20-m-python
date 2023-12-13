from rest_framework import serializers, pagination
from .models import Achievement, AchievementAssignment


class PaginationSerializer(pagination.PageNumberPagination):
    page_size = 5
    max_page_size = 50


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'


class AchievementAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AchievementAssignment
        fields = '__all__'
