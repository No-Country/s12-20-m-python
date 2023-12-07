from django.db import models
from model_utils.models import TimeStampedModel
# Users 
from apps.users.models import UserProfile
# Create your models here.

class Post(TimeStampedModel):
    users_id = models.ForeignKey(UserProfile,on_delete=models.CASCADE )

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'


class ImgPost(TimeStampedModel):
    img = models.ImageField(upload_to='images/')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='img_posts')

    class Meta:
        verbose_name = 'ImgPost'
        verbose_name_plural = 'ImgPosts'

class VideoPost(TimeStampedModel):
    video = models.FileField(upload_to='videos/')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='video_posts')

    class Meta:
        verbose_name = 'VideoPost'
        verbose_name_plural = 'VideoPosts'

class MessagePost(TimeStampedModel):
    message = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='message_posts')

    class Meta:
        verbose_name = 'MessagePost'
        verbose_name_plural = 'MessagePosts'
