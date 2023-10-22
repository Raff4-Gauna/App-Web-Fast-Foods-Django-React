from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import RegisterBusiness
from .BusinessSerializer import BusinessSerializer, BusinessListSerializer, CreateRegisterBusinessSerializer
from rest_framework import generics, status
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from .permissions import IsPostAuthorOrReadOnly,AuthorPermission
from .validations import validate_opening_and_closing_time, validate_phone_number
# Get list view business

    
# # # LIST BUSINESS
# class RegisterBusinessListView(APIView):

#     def get(self, request, format=None):
#         if RegisterBusiness.objects.all().exists():

#             businesses = RegisterBusiness.objects.all()

#             paginator = SmallSetPagination()
#             results = paginator.paginate_queryset(businesses, request)
#             serializer = BusinessListSerializer(results, many=True)

#             return paginator.get_paginated_response({'businesses': serializer.data})
#         else:
#             return Response({'error': 'No businesses found'}, status=status.HTTP_404_NOT_FOUND)


# # LIST BUSINESS
class RegisterBusinessListView(APIView):

    def get(self, request, format=None):
        if RegisterBusiness.objects.all().exists():
            # Ordena los objetos por el campo deseado, por ejemplo, 'name'
            businesses = RegisterBusiness.objects.all().order_by('name')

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(businesses, request)
            serializer = BusinessListSerializer(results, many=True)

            return paginator.get_paginated_response({'businesses': serializer.data})
        else:
            return Response({'error': 'No businesses found'}, status=status.HTTP_404_NOT_FOUND)



# class RegisterBusinessListView(APIView):
#     def get(self, request, format=None):
#         businesses = RegisterBusiness.objects.all()

#         if businesses.exists():
#             business_list = []

#             for business in businesses:
#                 business_item = {
#                     "name": business.name,
#                     "location": business.location,
#                     # "thumbnail": business.get_thumbnail(),
#                 }
#                 business_list.append(business_item)

#             response_data = {
#                 "count": businesses.count(),
#                 "next": None,
#                 "previous": None,
#                 "results": {
#                     "businesses": business_list
#                 }
#             }
#             return Response(response_data, status=status.HTTP_200_OK)
#         else:
#             return Response({'error': 'No businesses found'}, status=status.HTTP_404_NOT_FOUND)



# #  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

class RegisterBusinessCreateView(APIView):
    permission_classes = [IsAuthenticated, AuthorPermission]

    def post(self, request, format=None):
        user = self.request.user

        # Verificar si el usuario ya tiene un negocio asociado
        if user.business is not None:
            raise ValidationError("You already have a business.")

        data = request.data

        serializer = CreateRegisterBusinessSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            business = serializer.instance  # Obtener la instancia del negocio creado

            # Asignar el negocio al usuario
            user.business = business
            user.save()

            return Response({'success': 'Business created'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)