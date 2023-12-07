from rest_framework.viewsets import ModelViewSet

from .models import Post,ImgPost,VideoPost, MessagePost

from .serializers import PostSerializer, ImgPostSerializer, VideoPostSerializer, MessagePostSerializer

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class ImgPostViewSet(ModelViewSet):
    queryset = ImgPost.objects.all()
    serializer_class = ImgPostSerializer

class VideoPostViewSet(ModelViewSet):
    queryset = VideoPost.objects.all()
    serializer_class = VideoPostSerializer

class MessagePostViewSet(ModelViewSet):
    queryset = MessagePost.objects.all()
    serializer_class = MessagePostSerializer
