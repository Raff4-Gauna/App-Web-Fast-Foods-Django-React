from rest_framework import serializers
from .models import RegisterBusiness

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterBusiness
        fields = '__all__'



class BusinessListSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    class Meta:
        model = RegisterBusiness
        fields = [
                    'name',
                    'location',
                    'image_url',
                ]
        
    def get_image_url(self, obj):
        if obj.images:
            return self.context['request'].build_absolute_uri(obj.images.url)
        return None   
                
                
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
