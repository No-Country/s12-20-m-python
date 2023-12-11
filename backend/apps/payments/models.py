from django.db import models
# models utils
from model_utils.models import TimeStampedModel
# external models
from apps.users.models import Adoption


class Payment(TimeStampedModel):
    # Model payments
    first_name = models.CharField('first name', max_length=50)
    last_name = models.CharField('last name', max_length=50)
    number_card = models.PositiveBigIntegerField('number card')
    cod_card = models.PositiveSmallIntegerField('code card')
    number_trees = models.PositiveSmallIntegerField('total trees')
    cost = models.PositiveBigIntegerField('price')
    adoption_id = models.ForeignKey(Adoption, related_name='payment_adoption', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Payment'
        verbose_name_plural = 'Payments'

    def get_fullname(self):
        return self.first_name + ' ' + self.last_name

    def __str__(self):
        return self.get_fullname()


class Voucher(TimeStampedModel):
    # Model voucher
    message = models.CharField('message voucher', max_length=255)
    pay_id = models.ForeignKey(
        Payment, related_name='voucher_payment', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Voucher'
        verbose_name_plural = 'Vouchers'

    def __str__(self):
        return self.pay_id.get_fullname()
