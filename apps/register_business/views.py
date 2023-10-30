from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.shortcuts import render, get_object_or_404
from .models import RegisterBusiness
from .BusinessSerializer import BusinessSerializer, BusinessListSerializer, CreateRegisterBusinessSerializer
from rest_framework import generics, status
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from .permissions import IsPostAuthorOrReadOnly,AuthorPermission
from .validations import validate_opening_and_closing_time, validate_phone_number

# #  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

# class RegisterBusinessCreateView(APIView):
#     permission_classes = [IsAuthenticated, AuthorPermission]

#     def post(self, request, format=None):
#         user = self.request.user

#         # Verificar si el usuario ya tiene un negocio asociado
#         if user.business is not None:
#             raise ValidationError("You already have a business.")

#         data = request.data

#         serializer = CreateRegisterBusinessSerializer(data=data)

#         if serializer.is_valid():
#             serializer.save()
#             business = serializer.instance  # Obtener la instancia del negocio creado

#             # Asignar el negocio al usuario
#             user.business = business
#             user.save()

#             return Response({'success': 'Business created'}, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        



class RegisterBusinessCreateView(APIView):
    permission_classes = [IsAuthenticated, AuthorPermission]

    def post(self, request, format=None):
        user = self.request.user

        # Verificar si el usuario ya tiene un negocio asociado
        if user.business is not None:
            raise ValidationError("You already have a business.")

        data = request.data

        data['images'] = request.FILES.get('images')

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
        

        


class RegisterBusinessListView(APIView):
    def get(self, request, format=None):
        businesses = RegisterBusiness.objects.all().order_by('name')

        if businesses.exists():
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(businesses, request)
            serializer = BusinessListSerializer(results, many=True)
            serializer = BusinessListSerializer(results, many=True, context={'request': request})
            
            return paginator.get_paginated_response({'businesses': serializer.data})
        else:
            return Response({'error': 'No businesses found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


# class RegisterBusinessDetailView(APIView):
#     def get(self, request, pk,format=None):
#         business = get_object_or_404(RegisterBusiness, pk=pk)
#         serializer = BusinessListSerializer(business)
#         return Response({'businesses':serializer.data}, status=status.HTTP_200_OK)        

class RegisterBusinessDetailView(APIView):
    def get(self, request, business_slug, format=None):
        business = get_object_or_404(RegisterBusiness, slug=business_slug)
        serializer = BusinessListSerializer(business)
        return Response({'business': serializer.data}, status=status.HTTP_200_OK)
