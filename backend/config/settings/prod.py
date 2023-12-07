from .base import *
import os

DEBUG = True
ALLOWED_HOSTS = ["*"]

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': get_secret('DB_PROD_NAME'),
        'USER': get_secret('DB_PROD_USER'),
        'PASSWORD': get_secret('DB_PROD_PASSWORD'),
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

STATIC_URL = '/static/'
STATIC_DIR = os.path.join(BASE_DIR, 'static')
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    'http://127.0.0.1:5173',
]
