from django.db import models

# Create your models here.

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    users_id = models.IntegerField()

class ImgPost(models.Model):
    img_post_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='img_posts')
    img = models.ImageField(upload_to='img_posts')

class VideoPost(models.Model):
    video_post_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='video_posts')
    video = models.FileField(upload_to='video_posts')

class MessagePost(models.Model):
    message_post_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='message_posts')
    message = models.TextField()
