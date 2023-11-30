from django.db import models
# from users.models import Adoption


class Pay(models.Model):
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    number_card = models.IntegerField(null=False)
    cod_card = models.SmallIntegerField(null=False)
    number_trees = models.IntegerField(null=False)
    cost = models.IntegerField(null=False)
    # adoption_id = models.ForeignKey(Adoption, on_delete=models.CASCADE)


class Voucher(models.Model):
    pass
    # pay_id = models.ForeignKey(Pay, on_delete=models.CASCADE)
    # adoption_id = models.ForeignKey(Adoption, on_delete=models.CASCADE)
