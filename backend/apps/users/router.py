from rest_framework.routers import DefaultRouter

from .viewset import CountryViewSet, UserViewSet, AdoptionViewSet, FollowUpViewSet

router = DefaultRouter()
router.register(r'user', UserViewSet)
router.register(r'country', CountryViewSet)
router.register(r'adoption', AdoptionViewSet)
router.register(r'follow-up', FollowUpViewSet)

urlpatterns = router.urls
