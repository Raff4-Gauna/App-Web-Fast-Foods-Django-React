from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import UserAccount

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
        ("Account Status", {"fields": ("is_online", "verified")}),
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
