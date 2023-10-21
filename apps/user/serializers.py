from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'phone_number',
            'location',
            'email',
            'is_online',
            'is_active',
            'is_staff',
            'verified',
            'role',
            'business',
            'date_joined',
            'updated_at',
        )