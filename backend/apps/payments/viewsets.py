from rest_framework import viewsets
from .models import Payment, Voucher
from .serializers import PaymentSerializer, VoucherSerializer, PaginationSerializer


class PaymentViewset(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    pagination_class = PaginationSerializer


class VoucherViewset(viewsets.ModelViewSet):
    queryset = Voucher.objects.all()
    serializer_class = VoucherSerializer
    pagination_class = PaginationSerializer
