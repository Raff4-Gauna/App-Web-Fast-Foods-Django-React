from rest_framework import serializers
from .models import RegisterBusiness

class RegisterBusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterBusiness
        fields = [
            'id',
            'name_local',
            'type_busine',
            'category_restaurante',
            'category_kiosco',
            'category_minimercado',
            'category_supermercado',
            'contact_methods',
            'phone_local',
            'adress_business',
            'owner',
            'asset',
        ]
