from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Country, Adoption, FollowUp

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    age = serializers.IntegerField()
    country = serializers.PrimaryKeyRelatedField(queryset=Country.objects.all())

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'age', 'country']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user_serializer = UserSerializer(data=user_data)
        user_serializer.is_valid(raise_exception=True)
        user = user_serializer.save()

        user_profile = UserProfile.objects.create(user=user, **validated_data)

        return user_profile

class AdoptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Adoption
        fields = '__all__'

class FollowUpSerializer(serializers.ModelSerializer):

    class Meta:
        model = FollowUp
        fields = '__all__'
