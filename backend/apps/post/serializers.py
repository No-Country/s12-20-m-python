from rest_framework import serializers, pagination
from .models import Post, ImgPost, VideoPost, MessagePost


class PaginationSerializer(pagination.PageNumberPagination):
    page_size = 5
    max_page_size = 50


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class ImgPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImgPost
        fields = '__all__'


class VideoPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoPost
        fields = '__all__'


class MessagePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessagePost
        fields = '__all__'
