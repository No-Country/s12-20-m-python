from rest_framework import serializers, pagination
from django.contrib.auth.models import User
from .models import UserProfile, Country, Adoption, FollowUp
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate


class PaginationSerializer(pagination.PageNumberPagination):
    page_size = 5
    max_page_size = 50


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'birthdate', 'country']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user_serializer = UserSerializer(data=user_data)
        user_serializer.is_valid(raise_exception=True)
        user = user_serializer.save()

        user_profile = UserProfile.objects.create(user=user, **validated_data)
        Token.objects.create(user=user)

        return user_profile


    def get_token(self, obj):
        return Token.objects.get(user=obj.user).key


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        # Autenticar al usuario
        user = authenticate(username=username, password=password)

        if not user or not user.check_password(password):
            raise serializers.ValidationError('Invalid credentials')

        data['user'] = user
        return data


class AdoptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Adoption
        fields = '__all__'


class FollowUpSerializer(serializers.ModelSerializer):

    class Meta:
        model = FollowUp
        fields = '__all__'
