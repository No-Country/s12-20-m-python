from django.urls import path
from .views import (
    AchievementListCreateView,
    AchievementDetailView,
    AchievementAssignmentListCreateView,
    AchievementAssignmentDetailView,
)

urlpatterns = [
    path('achievements/', AchievementListCreateView.as_view(), name='achievement-list'),
    path('achievements/<int:pk>/', AchievementDetailView.as_view(), name='achievement-detail'),
    path('achievementassignments/', AchievementAssignmentListCreateView.as_view(), name='achievementassignment-list'),
    path('achievementassignments/<int:pk>/', AchievementAssignmentDetailView.as_view(), name='achievementassignment-detail'),
]