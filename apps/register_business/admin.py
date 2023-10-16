from django.contrib import admin
from .models import RegisterBusiness

@admin.register(RegisterBusiness)
class RegisterBusinessAdmin(admin.ModelAdmin):
    list_display = ['name', 'owner', 'verified', 'registration_date']
    list_filter = ['verified', 'registration_date']
    search_fields = ['name', 'owner__email']
    list_per_page = 20

    fieldsets = (
        ('Business Information', {
            'fields': ('name', 'description', 'open_days', 'opening_time', 'closing_time', 'location', 'phone_number', 'images')
        }),
        ('Ownership', {
            'fields': ('owner', 'verified')
        }),
        ('Date Information', {
            'fields': ('registration_date',)
        }),
    )
