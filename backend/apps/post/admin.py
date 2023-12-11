from django.contrib import admin
from .models import Post, ImgPost, VideoPost, MessagePost
# Register your models here.

register = (Post, ImgPost, VideoPost, MessagePost)

admin.site.register(register)