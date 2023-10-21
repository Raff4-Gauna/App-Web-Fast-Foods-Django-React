from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import UserAccount
from apps.register_business.models import RegisterBusiness
from django.contrib.auth import get_user_model
User = get_user_model()


class UserAccountAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            "Personal Info",
            {"fields": ("first_name", "last_name", "phone_number", "location")},
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        ("Important Dates", {"fields": ("last_login", "date_joined")}),
        ("Role", {"fields": ("role",)}),
        ("Business", {"fields": ("business",)}),  
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )

    list_display = (
        "email",
        "first_name",
        "last_name",
        "is_staff",
        "is_active",
        "role",
        "verified",
    )
    search_fields = ("email", "first_name", "last_name")
    ordering = ("email",)



admin.site.register(User, UserAccountAdmin)

# class UserAccountAdmin(admin.ModelAdmin):
#     list_display = ('id', 'email', 'first_name', 'last_name', 'phone_number', 'location', 'role', 'is_active', 'is_staff', 'verified', 'date_joined', 'updated_at')
#     list_filter = ('role', 'is_active', 'is_staff', 'verified')
#     search_fields = ('email', 'first_name', 'last_name')

#     fieldsets = (
#         (None, {
#             'fields': ('email', 'first_name', 'last_name', 'phone_number', 'location', 'role', 'is_active', 'is_staff', 'verified')
#         }),
#     )

# admin.site.register(UserAccount, UserAccountAdmin)


class RegisterBusinessAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'location', 'phone_number', 'email_business', 'attention_schedule', 'images', 'verified', 'registration_date')
    list_filter = ('verified',)
    search_fields = ('name', 'location')

    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'location', 'phone_number', 'email_business', 'attention_schedule', 'images', 'verified')
        }),
    )

admin.site.register(RegisterBusiness, RegisterBusinessAdmin)

