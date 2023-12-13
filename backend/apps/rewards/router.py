from rest_framework.routers import DefaultRouter

# from . import viewsets
from .viewset import  AchievementViewSet,AchievementAssignmentViewSet 
router = DefaultRouter()
router.register(r'achievement', AchievementViewSet)
router.register(r'achievement-assginment', AchievementAssignmentViewSet)
urlpatterns = router.urls
