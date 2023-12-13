from rest_framework.viewsets import ModelViewSet

from .models import Post, ImgPost, VideoPost, MessagePost

from .serializers import PostSerializer, ImgPostSerializer, VideoPostSerializer, MessagePostSerializer, PaginationSerializer


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = PaginationSerializer


class ImgPostViewSet(ModelViewSet):
    queryset = ImgPost.objects.all()
    serializer_class = ImgPostSerializer
    pagination_class = PaginationSerializer


class VideoPostViewSet(ModelViewSet):
    queryset = VideoPost.objects.all()
    serializer_class = VideoPostSerializer
    pagination_class = PaginationSerializer


class MessagePostViewSet(ModelViewSet):
    queryset = MessagePost.objects.all()
    serializer_class = MessagePostSerializer
    pagination_class = PaginationSerializer
