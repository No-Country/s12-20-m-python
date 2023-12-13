# Rest Framework
from rest_framework import serializers, pagination
# Models
from .models import Land, Tree, TypeTree


class PaginationSerializer(pagination.PageNumberPagination):
    page_size = 5
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
        ]

    def get_count_tree(self, obj):
        return obj.tree.all().count()

    def get_count_typetree(self, obj):
        return obj.type_tree.all().count()


class LandSerialziers (serializers.ModelSerializer):
    "Serializer for the Land. Method POST - DELETE - UPDATE "

    class Meta:
        model = Land
        fields = '__all__'

# Tree


class TreeSerializers (serializers.ModelSerializer):
    "Serializer for the Tree model"

    class Meta:
        model = Tree
        fields = '__all__'


# Type Tree
class TypeTreeSerializers (serializers.ModelSerializer):
    "Serializer for the TypeTree model"

    class Meta:
        model = TypeTree
        fields = '__all__'
