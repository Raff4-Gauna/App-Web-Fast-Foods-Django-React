from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import RegisterBusiness  # Importa tu modelo RegisterBusiness
from .BusinessSerializer import BusinessSerializer  # Importa tu serializador RegisterBusinessSerializer
from .CreateRegisterBusinessSerializer import CreateRegisterBusinessSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

# class RegisterBusinessListView(APIView):
#     def get(self, request, format=None):
#         if RegisterBusiness.objects.all().exists():
#             businesses = RegisterBusiness.objects.all()

#             result = []

#             for business in businesses:
#                 item = {
#                     'id': business.id,
#                     'name': business.name,
#                     'description': business.description,
#                     'open_days': business.open_days,
#                     'opening_time': business.opening_time,
#                     'closing_time': business.closing_time,
#                     'location': business.location,
#                     'phone_number': business.phone_number,
#                     'images': business.images,
#                     'owner': business.owner.email,
#                     'verified': business.verified,
#                     'registration_date': business.registration_date,
#                 }

#                 result.append(item)

#             return Response({'businesses': result}, status=status.HTTP_200_OK)
#         else:
#             return Response({'error': 'No businesses found'}, status=status.HTTP_404_NOT_FOUND)

# class RegisterBusinessListView(generics.ListAPIView):
#     queryset = RegisterBusiness.objects.all()
#     serializer_class = RegisterBusinessSerializer


# Get list view business

class RegisterBusinessListView(generics.ListAPIView):
    queryset = RegisterBusiness.objects.all()
    serializer_class = BusinessSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        businesses = response.data.get('results', [])
        formatted_businesses = []

        for business in businesses:
            formatted_business = {
                'id': business['id'],
                'name': business['name'],
                'description': business['description'],
                # Agrega los campos que deseas incluir o personalizar aquí
            }
            formatted_businesses.append(formatted_business)

        response.data['results'] = formatted_businesses
        return response
    



# #  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

# class CreateRegisterBusinessView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)  # Requiere autenticación

#     def post(self, request, format=None):
#         serializer = RegisterBusinessSerializer(data=request.data)

#         if serializer.is_valid():
#             # Asigna el usuario actual como propietario del negocio
#             serializer.save(owner=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


# class CreateRegisterBusinessView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)

#     def post(self, request, format=None):
#         data = self.request.data
#         name_local = data.get("name_local")
#         type_busine = data.get("type_busine")
#         phone_local = data.get("phone_local")
#         category_restaurante = data.get("category_restaurante")
#         category_kiosco = data.get("category_kiosco")
#         category_minimercado = data.get("category_minimercado")
#         category_supermercado = data.get("category_supermercado")
#         contact_methods = data.get("contact_methods")
#         adress_business = data.get("adress_business")
#         owner = data.get("owner")
#         asset = data.get("asset")

#         try:
#             business = RegisterBusiness(
#                 name_local=name_local,
#                 type_busine=type_busine,
#                 phone_local=phone_local,
#                 category_restaurante=category_restaurante,
#                 category_kiosco=category_kiosco,
#                 category_minimercado=category_minimercado,
#                 category_supermercado=category_supermercado,
#                 contact_methods=contact_methods,
#                 adress_business=adress_business,
#                 owner=owner,
#                 asset=asset,
#             )
#             business.save()
#             return Response(status=status.HTTP_201_CREATED)
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)



class CreateRegisterBusinessView(generics.CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = RegisterBusiness.objects.all()
    serializer_class = CreateRegisterBusinessSerializer

    def perform_create(self, serializer):
        try:
            # Obtenemos el usuario autenticado que está creando el negocio
            user = self.request.user

            # Agrega cualquier lógica personalizada aquí antes de guardar el negocio
            # Por ejemplo, establecer el propietario del negocio como el usuario autenticado
            serializer.save(owner=user)
            
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': 'No se pudo crear el negocio'}, status=status.HTTP_400_BAD_REQUEST)