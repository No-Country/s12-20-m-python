from django.db import models
from model_utils.models import TimeStampedModel

class Country(TimeStampedModel):
    country = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

    def __str__(self):
        return self.country

class User(TimeStampedModel):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    age = models.IntegerField()
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Adoption(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    land = models.ForeignKey("Land", on_delete=models.CASCADE)
    tree = models.ForeignKey("Tree", on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Adoption'
        verbose_name_plural = 'Adoptions'

    def __str__(self):
        return self.name

class FollowUp(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tree = models.ForeignKey("Tree", on_delete=models.CASCADE)
    description = models.TextField(max_length=255)

    class Meta:
        verbose_name = 'FollowUp'
        verbose_name_plural = 'FollowUps'

    def __str__(self):
        return f"FollowUp - Name tree: {self.tree.name} Name user: {self.user.first_name}"
