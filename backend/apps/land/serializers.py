# Rest Framework
from rest_framework import serializers, pagination
# Models
from .models import Land, Tree, TypeTree
from django.db.models import Sum


class PaginationSerializer(pagination.PageNumberPagination):
    page_size = 20
    max_page_size = 50

# Land


class TypeTreeLandSerializers (serializers.ModelSerializer):
    "Type Tree serrialzier for detailing the land"

    class Meta:
        model = TypeTree
        fields = [
            'id',
            'name',
            'common_name',
            'scientific_name',
        ]


class TreeLandSerializers (serializers.ModelSerializer):
    "Tree serrialzier for detailing the land"

    class Meta:
        model = Tree
        fields = [
            'id',
            'name'
        ]


class LandGetSerialziers (serializers.ModelSerializer):
    "Serializer for the Land. Method GET - RETRIVE  "

    tree = TreeLandSerializers(many=True)
    type_tree = TypeTreeLandSerializers(many=True)

    count_tree = serializers.SerializerMethodField()
    count_typetree = serializers.SerializerMethodField()
    hectare = serializers.SerializerMethodField()

    class Meta:
        model = Land
        fields = [
            'id',
            'created',
            'place',
            'ammount',
            'img',
            'description',
            'get_coordinated',
            'count_tree',
            'tree',
            'count_typetree',
            'type_tree',
            'hectare',
        ]

    def get_count_tree(self, obj):
        return obj.tree.all().count()

    def get_count_typetree(self, obj):
        return obj.type_tree.all().count()

    def get_hectare(self, obj):
        multiplicador = 10
        cantidad_terrenos = Land.objects.count()
        hectareas = cantidad_terrenos * multiplicador
        return hectareas


class LandSerialziers (serializers.ModelSerializer):
    "Serializer for the Land. Method POST - DELETE - UPDATE "

    class Meta:
        model = Land
        fields = '__all__'

# Tree


class TreeSerializers (serializers.ModelSerializer):
    "Serializer for the Tree model"

    count_tree = serializers.SerializerMethodField()

    class Meta:
        model = Tree
        fields = [
            'name',
            'land',
            'typetree',
            'description',
            'count_tree',
        ]

    def get_count_tree(self, obj):
        return Tree.objects.count()


# Type Tree
class TypeTreeSerializers (serializers.ModelSerializer):
    "Serializer for the TypeTree model"
    sum_co2 = serializers.SerializerMethodField()

    class Meta:
        model = TypeTree
        fields = [
            'name',
            'common_name',
            'scientific_name',
            'img',
            'co2',
            'sum_co2',
        ]

    def get_sum_co2(self, obj):
        total_co2 = TypeTree.objects.aggregate(
            total_co2=Sum('co2')).get('total_co2') or 0
        return total_co2
