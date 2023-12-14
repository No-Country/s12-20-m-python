# Django
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Models Utils
from model_utils.models import TimeStampedModel


class TypeTree (TimeStampedModel):
    """ Model that represents the Type Tree """

    name = models.CharField(
        'Type of tree',
        max_length=50
    )
    common_name = models.CharField(max_length=70)
    scientific_name = models.CharField(max_length=70)

    img = models.ImageField(
        'Image',
        upload_to='tree',
        default='static/tree/default.jpg'
    )

    co2 = models.IntegerField(default=20)

    class Meta:
        """Meta definition for Type Tree."""

        verbose_name = 'Type Tree'
        verbose_name_plural = 'Type Trees'

    def __str__(self):
        """Unicode representation of Type Tree."""

        return str(self.name)


class Land (TimeStampedModel):
    """ Model that represents the Land """

    place = models.CharField(
        'Location of the land',
        max_length=50
    )
    ammount = models.IntegerField('Number of trees')
    img = models.ImageField(
        'Image',
        upload_to='land',
        default='static/land/default.jpg'
    )
    description = models.TextField('Description')
    latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        validators=[
            MinValueValidator(-90),
            MaxValueValidator(90)
        ]
    )
    longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        validators=[
            MinValueValidator(-90),
            MaxValueValidator(90)
        ]
    )
    type_tree = models.ManyToManyField(TypeTree)

    class Meta:
        """Meta definition for Land."""

        verbose_name = 'Land'
        verbose_name_plural = 'Lands'

    def get_coordinated(self):
        """ Coordinated """
        return [self.latitude, self.longitude]

    def __str__(self):
        """Unicode representation of Land."""
        return str(self.place) + str(self.ammount)


class Tree (TimeStampedModel):
    """ Model that represents the Tree """

    name = models.CharField(
        'Name',
        max_length=50
    )
    land = models.ForeignKey(
        Land,
        related_name='tree',
        on_delete=models.CASCADE
    )
    typetree = models.CharField(
        'type of trees',
        max_length=50
    )

    description = models.CharField(max_length=50)

    class Meta:
        """Meta definition for Tree."""

        verbose_name = 'Tree'
        verbose_name_plural = 'Trees'

    def __str__(self):
        """Unicode representation of Tree."""
        return self.name + '-' + self.land.place
