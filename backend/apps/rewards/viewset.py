# Rest
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
# .models
from .models import Achievement, AchievementAssignment
# .serialziers
from .serializers import AchievementSerializer , AchievementAssignmentSerializer

class AchievementViewSet(ModelViewSet):
    'ViewSet Achievement'

    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

 

class AchievementAssignmentViewSet(ModelViewSet):
    'ViewSet Achievement assignment'

    queryset = AchievementAssignment.objects.all()
    serializer_class = AchievementAssignmentSerializer




