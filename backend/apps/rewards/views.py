
# Create your views here.
from rest_framework import viewsets
from .models import Achievement, AchievementAssignment
from .serializer import AchievementSerializer, AchievementAssignmentSerializer

class AchievementListCreateView(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class AchievementDetailView(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class AchievementAssignmentListCreateView(viewsets.ModelViewSet):
    queryset = AchievementAssignment.objects.all()
    serializer_class = AchievementAssignmentSerializer

class AchievementAssignmentDetailView(viewsets.ModelViewSet):
    queryset = AchievementAssignment.objects.all()
    serializer_class = AchievementAssignmentSerializer