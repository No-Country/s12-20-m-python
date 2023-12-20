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
from rest_framework.views import APIView
# from rest_framework.parsers import MultiPartParser, FormParser


class CountryViewSet(viewsets.ModelViewSet):

    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    pagination_class = PaginationSerializer
    # parser_classes = [MultiPartParser, FormParser]

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
            # Verifica si el usuario tiene un token
            token, created = Token.objects.get_or_create(user=user)

            login(request, user)
            
            # Obtén el UserProfile asociado al usuario
            user_profile = UserProfile.objects.get(user=user)
            user_profile_serializer = UserProfileSerializer(user_profile)

            return Response({
                'message': 'Successful login',
                'token': token.key,
                'user_profile': user_profile_serializer.data
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class UserLogoutAPIView(APIView):

    def post(self, request):
        logout(request)
        return Response({'message': "Logout successful"})
