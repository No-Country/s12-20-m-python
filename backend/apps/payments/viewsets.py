from rest_framework import viewsets
from .models import Payment, Voucher
from .serializers import PaymentSerializer, VoucherSerializer


class PaymentViewset(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


class VoucherViewset(viewsets.ModelViewSet):
    queryset = Voucher.objects.all()
    serializer_class = VoucherSerializer
