from django.db import models
from model_utils.models import TimeStampedModel

# Create your models here.

class Post(TimeStampedModel):
    id = models.AutoField(primary_key=True)
    # users_id = models.ForeignKey(User,on_delete=models.CASCADE )

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'


class ImgPost(TimeStampedModel):
    img_post_id = models.AutoField(primary_key=True)
    img = models.ImageField(upload_to='images/')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='img_posts')

    class Meta:
        verbose_name = 'ImgPost'
        verbose_name_plural = 'ImgPosts'

class VideoPost(TimeStampedModel):
    video_post_id = models.AutoField(primary_key=True)
    video = models.FileField(upload_to='videos/')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='video_posts')

    class Meta:
        verbose_name = 'VideoPost'
        verbose_name_plural = 'VideoPosts'

class MessagePost(TimeStampedModel):
    message_post_id = models.AutoField(primary_key=True)
    message = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='message_posts')

    class Meta:
        verbose_name = 'MessagePost'
        verbose_name_plural = 'MessagePosts'
