from rest_framework.routers import DefaultRouter
from .viewsets import VoucherViewset, PaymentViewset

# from . import viewsets

router = DefaultRouter()

router.register(r'payments', PaymentViewset)
router.register(r'vouchers', VoucherViewset)

urlpatterns = router.urls

