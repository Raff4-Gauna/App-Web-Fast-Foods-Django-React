from rest_framework import serializers
from .models import RegisterBusiness

class CreateRegisterBusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterBusiness
        fields = ['name', 'description', 'open_days', 'opening_time', 'closing_time', 'location', 'phone_number', 'images']
