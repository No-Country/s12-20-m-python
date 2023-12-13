from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .models import Country, UserProfile, Adoption, FollowUp

from .serializers import (
    CountrySerializer,
    UserProfileSerializer,
    AdoptionSerializer,
    FollowUpSerializer,
    LoginUserSerializer,
    UserSerializer,
    PaginationSerializer,
)
from .utils import CustomPermissions, CustomAuthentication
from django.contrib.auth import logout
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework.views import APIView


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    # permission_classes = (CustomPermissions,)
    # authentication_classes = (CustomAuthentication,)
    pagination_class = PaginationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_profile = serializer.save()

        serializer_response = UserProfileSerializer(user_profile)
        return Response(serializer_response.data, status=status.HTTP_201_CREATED)


class AdoptionViewSet(viewsets.ModelViewSet):

    queryset = Adoption.objects.all()
    serializer_class = AdoptionSerializer
    pagination_class = PaginationSerializer


class FollowUpViewSet(viewsets.ModelViewSet):
    queryset = FollowUp.objects.all()
    serializer_class = FollowUpSerializer
    pagination_class = PaginationSerializer


class LoginViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = LoginUserSerializer

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        user = authenticate(username=username, password=password)

        if user:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    def create(self, request, *args, **kwargs):

        return Response({'message': 'User instance created'}, status=status.HTTP_201_CREATED)


class Logout(APIView):
    def post(self, request, format=None):
        if request.user.is_authenticated:
            try:
                # Elimina todos los tokens asociados al usuario
                Token.objects.filter(user=request.user).delete()

                # Realiza el logout
                logout(request)

                return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': f'Error during logout: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({'error': 'User not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
