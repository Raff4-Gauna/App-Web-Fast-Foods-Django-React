from rest_framework import serializers
from .models import RegisterBusiness

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterBusiness
        fields = '__all__'