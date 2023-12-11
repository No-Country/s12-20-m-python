from rest_framework.routers import DefaultRouter

from .viewset import PostViewSet, ImgPostViewSet, VideoPostViewSet, MessagePostViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'imgposts', ImgPostViewSet)
router.register(r'videoposts', VideoPostViewSet)
router.register(r'messageposts', MessagePostViewSet)

urlpatterns = router.urls