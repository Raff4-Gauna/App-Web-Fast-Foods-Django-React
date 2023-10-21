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

# class RegisterBusinessListView(generics.ListAPIView):
#     queryset = RegisterBusiness.objects.all()
#     serializer_class = BusinessSerializer

#     def list(self, request, *args, **kwargs):
#         response = super().list(request, *args, **kwargs)
#         businesses = response.data.get('results', [])
#         formatted_businesses = []

#         for business in businesses:
#             formatted_business = {
#                 'id': business['id'],
#                 'name': business['name'],
#                 'description': business['description'],
#                 # Agrega los campos que deseas incluir o personalizar aquí
#             }
#             formatted_businesses.append(formatted_business)

#         response.data['results'] = formatted_businesses
#         return response
    
# LIST BUSINESS
class RegisterBusinessListView(APIView):

    def get(self, request, format=None):
        if RegisterBusiness.objects.all().exists():

            businesses = RegisterBusiness.objects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(businesses, request)
            serializer = BusinessListSerializer(results, many=True)

            return paginator.get_paginated_response({'businesses': serializer.data})
        else:
            return Response({'error': 'No businesses found'}, status=status.HTTP_404_NOT_FOUND)

# #  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 




# class RegisterBusinessCreateView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)  # Asegura que el usuario esté autenticado

#     def post(self, request, format=None):
#         data = self.request.data

#         # Recoge los datos del POST request
#         name = data['name']
#         description = data.get('description', '')  # Puedes utilizar .get para manejar campos opcionales
#         open_days = data['open_days']
#         opening_time = data['opening_time']
#         closing_time = data['closing_time']
#         location = data['location']
#         phone_number = data['phone_number']

#         # Asegura que el usuario autenticado sea el propietario del negocio
#         owner = self.request.user

#         try:

#             send_mail(
#                 'New Client Request: '
#                 + '\n\nName: ' + name 
#                 + '\nDescription: ' + description
#                 + '\n\nOpen_days:' + open_days
#                 + '\nOpening_time: ' + opening_time
#                 + '\n\nClosing_time: ' + closing_time,
#                 + '\n\nLocation: ' + location,
#                 + '\n\nPhone_number: ' + phone_number,
#                 'mail@boomslag.com',
#                 ['mail@boomslag.com'],
#                 fail_silently=False
#             )

#             # Crea un nuevo negocio en la base de datos
#             RegisterBusiness.objects.create(
#                 name=name,
#                 description=description,
#                 open_days=open_days,
#                 opening_time=opening_time,
#                 closing_time=closing_time,
#                 location=location,
#                 phone_number=phone_number,
#                 owner=owner  # Asigna el usuario autenticado como propietario
#             )

#             return Response({'success': 'Business created successfully'}, status=status.HTTP_201_CREATED)
#         except Exception as e:
#             return Response({'error': 'Failed to create the business'}, status=status.HTTP_400_BAD_REQUEST)


# class RegisterBusinessCreateView(APIView):
#     permission_classes = (AuthorPermission, )
#     def post(self, request, format=None):
#         owner = self.request.user
#         data = request.data 

#         data['owner'] = owner
#         serializer = CreateRegisterBusinessSerializer(data=data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response({'success': 'Business created'}, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class RegisterBusinessCreateView(APIView):
#     permission_classes = [IsAuthenticated, AuthorPermission]

#     def post(self, request, format=None):
#         user = self.request.user

#         # Verificar si el usuario ya tiene un negocio asociado
#         if user.business is not None:
#             raise ValidationError("You already have a business.")

#         data = request.data

#         name = data.get('name')
#         opening_time = data.get('opening_time')
#         closing_time = data.get('closing_time')
#         phone_number = data.get('phone_number')

#         # Aplicar validaciones personalizadas
#         validate_opening_and_closing_time(opening_time, closing_time)
#         validate_phone_number(phone_number)

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