# Generated by Django 4.2.7 on 2023-12-01 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('land', '0009_alter_land_latitude_alter_land_length'),
    ]

    operations = [
        migrations.AlterField(
            model_name='land',
            name='latitude',
            field=models.DecimalField(decimal_places=5, max_digits=12, verbose_name='Latitude'),
        ),
        migrations.AlterField(
            model_name='land',
            name='length',
            field=models.DecimalField(decimal_places=5, max_digits=12, verbose_name='Length'),
        ),
    ]
