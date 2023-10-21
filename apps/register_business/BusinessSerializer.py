from rest_framework import serializers
from .models import RegisterBusiness

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterBusiness
        fields = '__all__'



class BusinessListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterBusiness
        fields = [
                    'name',
                    'location',
                ]
                    
                
class CreateRegisterBusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterBusiness
        fields = [
                    'name', 
                    'description', 
                    'location', 
                    'phone_number', 
                    'email_business', 
                    'attention_schedule', 
                    'images',
                    'verified',
                ]
