from django.db import models
from django.contrib.auth.models import User as DjangoUser
from model_utils.models import TimeStampedModel
from datetime import date
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token
# Land
from apps.land.models import Land, Tree


class Country(TimeStampedModel):
    country = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

    def __str__(self):
        return self.country


class UserProfile(TimeStampedModel):
    user = models.OneToOneField(DjangoUser, on_delete=models.CASCADE)
    birthdate = models.DateField(null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    img = models.ImageField(
        'Image',
        upload_to='profile',
        default='static/profile/perfil.png'
    )

    def calculate_age(self):
        if self.birthdate:
            today = date.today()
            age = today.year - self.birthdate.year - \
                ((today.month, today.day) < (self.birthdate.month, self.birthdate.day))
            return age
        return None

    class Meta:
        verbose_name = 'UserProfile'
        verbose_name_plural = 'UserProfiles'

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"


class Adoption(TimeStampedModel):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    land = models.ForeignKey(Land, on_delete=models.CASCADE)
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Adoption'
        verbose_name_plural = 'Adoptions'

    def __str__(self):
        return self.name


class FollowUp(TimeStampedModel):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE)
    description = models.TextField(max_length=255)

    class Meta:
        verbose_name = 'FollowUp'
        verbose_name_plural = 'FollowUps'

    def __str__(self):
        return f"FollowUp - Name tree: {self.tree.name} Name user: {self.UserProfile.user.first_name}"
