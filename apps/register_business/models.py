from django.db import models
from django.utils import timezone
# from apps.user.models import UserAccount


def blog_thumbnail_directory(instance, filename):
    return 'business/{0}/{1}'.format(instance.title, filename)


class RegisterBusiness(models.Model):
    name =                  models.CharField(max_length=200, unique=True, help_text="Nombre del negocio de comida")
    description =           models.TextField(blank=True, null=True, help_text="Una breve descripción del negocio")
    location =              models.CharField(max_length=255, help_text="Dirección del negocio")
    phone_number =          models.CharField(max_length=15, unique=True, help_text="Número de contacto del negocio")
    email_business =        models.EmailField(help_text="Correo electrónico de contacto del negocio")
    attention_schedule =    models.CharField(max_length=100, help_text="Horario de atención del negocio")
    # images =                models.ImageField(upload_to='photos/%Y/%m/', blank=True, null=True, help_text="Foto principal del negocio")
    images =                models.ImageField(upload_to=blog_thumbnail_directory, max_length=500, blank=True, null=True, help_text="Foto principal del negocio")

    # owner =         models.OneToOneField('user.UserAccount', on_delete=models.CASCADE, related_name='business', null=True, blank=True)


    verified =      models.BooleanField(default=False)
    registration_date = models.DateTimeField(default=timezone.now)



    def get_thumbnail(self):
        if self.images:
            return self.images.url
        return ''


    def __str__(self):
        return self.name