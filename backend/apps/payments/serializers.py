from .models import Payment, Voucher
from rest_framework import serializers, pagination


class PaginationSerializer(pagination.PageNumberPagination):
    page_size = 5
    max_page_size = 50


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'


class VoucherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voucher
        fields = '__all__'
