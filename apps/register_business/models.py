from django.db import models
from django.utils import timezone
# from apps.user.models import UserAccount

class RegisterBusiness(models.Model):
    name =          models.CharField(max_length=255, unique=True)
    description =   models.TextField(blank=True, null=True)
    open_days =     models.CharField(max_length=7)
    opening_time =  models.TimeField()
    closing_time =  models.TimeField()
    location =      models.CharField(max_length=255)
    phone_number =  models.CharField(max_length=15, unique=True)

    images =        models.ImageField(upload_to='photos/%Y/%m/', blank=True, null=True)

    owner =         models.OneToOneField('user.UserAccount', on_delete=models.CASCADE, related_name='business', null=True, blank=True)


    verified =      models.BooleanField(default=False)
    registration_date = models.DateTimeField(default=timezone.now)



    def get_thumbnail(self):
        if self.images:
            return self.images.url
        return ''


    def __str__(self):
        return self.name
