from django.contrib import admin
from .models import RegisterBusiness

class RegisterBusinessAdmin(admin.ModelAdmin):
    list_display = ('name_local', 'type_busine', 'contact_methods', 'phone_local', 'adress_business', 'owner', 'asset')
    list_filter = ('type_busine', 'asset')
    search_fields = ('name_local', 'owner__email')
    list_per_page = 20

admin.site.register(RegisterBusiness, RegisterBusinessAdmin)
