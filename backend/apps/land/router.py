# Rest Framewok
from rest_framework.routers import DefaultRouter
# .viewset
from .viewset import LandViewSet, TreeViewSet, TypeTreeViewSet

router = DefaultRouter()
router.register(r'land', LandViewSet)
router.register(r'tree', TreeViewSet)
router.register(r'tree-type', TypeTreeViewSet)

urlpatterns = router.urls
