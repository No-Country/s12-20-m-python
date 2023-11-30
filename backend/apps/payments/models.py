from django.db import models
# from users.models import Adoption


class Pay(models.Model):
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    number_card = models.IntegerField(null=False)
    cod_card = models.SmallIntegerField(null=False)
    number_trees = models.IntegerField(null=False)
    cost = models.IntegerField(null=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # adoption_id = models.ForeignKey(Adoption, on_delete=models.CASCADE)


class Voucher(models.Model):
    # pay_id = models.ForeignKey(Pay, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
