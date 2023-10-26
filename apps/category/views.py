from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category
from .CategorySerializer import CategorySerializer

class ListCategoriesView(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        serialized_data = CategorySerializer(categories, many=True)
        return Response({'categories': serialized_data.data}, status=status.HTTP_200_OK)
