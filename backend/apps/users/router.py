from rest_framework.routers import DefaultRouter
from .viewset import CountryViewSet, AdoptionViewSet, FollowUpViewSet, UserProfileViewSet, LoginViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'usercreate', UserProfileViewSet, basename='usercreate')
router.register(r'countries', CountryViewSet, basename='country')
router.register(r'adoptions', AdoptionViewSet, basename='adoption')
router.register(r'follow-ups', FollowUpViewSet, basename='followup')
router.register(r'login', LoginViewSet, basename='login')

urlpatterns = router.urls
