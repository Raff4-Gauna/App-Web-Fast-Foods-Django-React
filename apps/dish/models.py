from django.db import models
from apps.register_business.models import RegisterBusiness
from apps.category.models import Category


def dish_thumbnail_directory(instance, filename):
    return 'media/categories/{0}/{1}'.format(instance.name, filename)


class Dish(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    images = models.ImageField(upload_to=dish_thumbnail_directory, max_length=500, blank=True, null=True, help_text="Imagen representativa del plato")
    business = models.ForeignKey(RegisterBusiness, on_delete=models.CASCADE)
    
    
    def __str__(self):
        return self.name