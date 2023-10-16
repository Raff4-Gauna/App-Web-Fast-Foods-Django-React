from django.db import models
from django.contrib.auth.models import (AbstractBaseUser, PermissionsMixin, BaseUserManager)
import uuid
from django.utils import timezone
from apps.register_business.models import RegisterBusiness

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.role = "admin"
        user.verified = True
        user.save(using=self._db)

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    ROLES = (
        ("admin", "Admin"),
        ("seller", "Seller"),
        ("customer", "Customer"),
        ("moderator", "Moderator"),
    )

    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    first_name =    models.CharField(max_length=100)
    last_name =     models.CharField(max_length=100)
    phone_number =  models.CharField(max_length=15, blank=True, null=True)
    location =      models.CharField(max_length=255, blank=True, null=True)
    email =         models.EmailField(unique=True)

    is_online =     models.BooleanField(default=False)
    is_active =     models.BooleanField(default=True)
    is_staff =      models.BooleanField(default=False)
    verified =      models.BooleanField(default=False)

    role =          models.CharField(max_length=20, choices=ROLES, default="customer")

    date_joined =   models.DateTimeField(default=timezone.now)
    updated_at =    models.DateTimeField(auto_now=True)

    objects =   UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_number', 'location']

    

def __str__(self):
        return self.email
