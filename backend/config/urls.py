from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.authtoken import views
from apps.users.viewset import UserLogoutAPIView

schema_view = get_schema_view(
    openapi.Info(
        title="Guardianes del Bosque ",
        default_version='v0.1',
        description="Documentacion",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0),
         name='schema-json'),
    path('', schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
         cache_timeout=0), name='schema-redoc'),
    path("admin/", admin.site.urls),
    path('user/', include('apps.users.router')),
    path('reward/', include('apps.rewards.router')),
    path('post/', include('apps.post.router')),
    path('payment/', include('apps.payments.router')),
    path('land/', include('apps.land.router')),
    path('api_generate_token/', views.obtain_auth_token),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
