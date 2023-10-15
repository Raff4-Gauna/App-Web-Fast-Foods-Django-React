from django.db import models

class type_busine():
    TYPE = (
        ("restaurante", "Restaurante"),
        ("kiosco", "Kiosco"),
        ("minimercado", "Minimercado"),
        ("supermercado", "Supermercado"),
        ("otros", "Otros"),
    )

class category_busine():
    TYPE_CATEG = (
        ("comidas rapidas", "Comidas Rapidas"),
        ("otros", "Otros"),
    )

class contact_methods():
    CONTACT_METH = (
        ("telefono", "Telefono"),
        ("whastapp", "Whastapp"),
        ("email", "Email"),
    )    


class RegisterBusiness(models.Model):
    name_local = models.CharField(max_length=150, unique=True)
    type_busine = models.CharField(max_length=20, choices=type_busine.TYPE)
    category_restaurante = models.CharField(max_length=20, choices=category_busine.TYPE_CATEG, blank=True, null=True)
    category_kiosco = models.CharField(max_length=20, choices=category_busine.TYPE_CATEG, blank=True, null=True)
    category_minimercado = models.CharField(max_length=20, choices=category_busine.TYPE_CATEG, blank=True, null=True)
    category_supermercado = models.CharField(max_length=20, choices=category_busine.TYPE_CATEG, blank=True, null=True)
    contact_methods = models.CharField(max_length=20, choices=contact_methods.CONTACT_METH)
    phone_local = models.CharField(max_length=15, unique=True)
    adress_business = models.CharField(max_length=255)
    owner = models.ForeignKey('user.UserAccount', on_delete=models.CASCADE)
    asset = models.BooleanField(default=True)
