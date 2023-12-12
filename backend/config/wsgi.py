"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""
from django.core.wsgi import get_wsgi_application
import os
import environ


env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)


os.environ.setdefault("DJANGO_SETTINGS_MODULE",
                      f"config.settings.{env('ENVIROMENT')}")

application = get_wsgi_application()
