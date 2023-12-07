from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Country, UserProfile, Adoption, FollowUp
from .serializers import CountrySerializer, UserProfileSerializer, AdoptionSerializer, FollowUpSerializer
from rest_framework.viewsets import ModelViewSet

class CountryViewSet(ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class UserViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # validaciones
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class AdoptionViewSet(ModelViewSet):
    queryset = Adoption.objects.all()
    serializer_class = AdoptionSerializer

class FollowUpViewSet(ModelViewSet):
    queryset = FollowUp.objects.all()
    serializer_class = FollowUpSerializer
    