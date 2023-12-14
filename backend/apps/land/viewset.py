# Rest
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
# .models
from .models import Land, Tree, TypeTree
# .serialziers
from .serializers import LandSerialziers, LandGetSerialziers, TreeSerializers, TypeTreeSerializers, PaginationSerializer
# from rest_framework.parsers import MultiPartParser, FormParser


class LandViewSet(ModelViewSet):
    'ViewSet Land'

    queryset = Land.objects.all()
    serializer_class = LandSerialziers
    pagination_class = PaginationSerializer
    # parser_classes = [MultiPartParser, FormParser]

    def list(self, request, *args, **kwargs):
        queryset = Land.objects.all().order_by('-created')
        serializer = LandGetSerialziers(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = LandGetSerialziers(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)


class TreeViewSet(ModelViewSet):
    'ViewSet Land'

    queryset = Tree.objects.all()
    serializer_class = TreeSerializers
    pagination_class = PaginationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class TypeTreeViewSet(ModelViewSet):
    'ViewSet TypeTree'

    queryset = TypeTree.objects.all()
    serializer_class = TypeTreeSerializers
    # parser_classes = [MultiPartParser, FormParser]
