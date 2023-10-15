from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import RegisterBusiness  # Importa tu modelo RegisterBusiness
from .RegisterBusinessSerializer import RegisterBusinessSerializer  # Importa tu serializador RegisterBusinessSerializer
from rest_framework.permissions import IsAuthenticated


class RegisterBusinessListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if RegisterBusiness.objects.all().exists():
            businesses = RegisterBusiness.objects.all()

            result = []

            for business in businesses:
                item = {
                    'id': business.id,
                    'name_local': business.name_local,
                    'type_busine': business.type_busine,
                    'category_restaurante': business.category_restaurante,
                    'category_kiosco': business.category_kiosco,
                    'category_minimercado': business.category_minimercado,
                    'category_supermercado': business.category_supermercado,
                    'contact_methods': business.contact_methods,
                    'phone_local': business.phone_local,
                    'adress_business': business.adress_business,
                    'owner': business.owner.email,
                    'asset': business.asset,
                }

                result.append(item)

            return Response({'businesses': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No businesses found'}, status=status.HTTP_404_NOT_FOUND)





# class CreateRegisterBusinessView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)  # Requiere autenticación

#     def post(self, request, format=None):
#         serializer = RegisterBusinessSerializer(data=request.data)

#         if serializer.is_valid():
#             # Asigna el usuario actual como propietario del negocio
#             serializer.save(owner=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class CreateRegisterBusinessView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        data = self.request.data
        name_local = data.get("name_local")
        type_busine = data.get("type_busine")
        phone_local = data.get("phone_local")
        category_restaurante = data.get("category_restaurante")
        category_kiosco = data.get("category_kiosco")
        category_minimercado = data.get("category_minimercado")
        category_supermercado = data.get("category_supermercado")
        contact_methods = data.get("contact_methods")
        adress_business = data.get("adress_business")
        owner = data.get("owner")
        asset = data.get("asset")

        try:
            business = RegisterBusiness(
                name_local=name_local,
                type_busine=type_busine,
                phone_local=phone_local,
                category_restaurante=category_restaurante,
                category_kiosco=category_kiosco,
                category_minimercado=category_minimercado,
                category_supermercado=category_supermercado,
                contact_methods=contact_methods,
                adress_business=adress_business,
                owner=owner,
                asset=asset,
            )
            business.save()
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
