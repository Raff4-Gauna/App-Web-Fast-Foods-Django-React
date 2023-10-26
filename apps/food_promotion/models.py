from django.db import models
from apps.register_business.models import RegisterBusiness
from apps.dish.models import Dish
from apps.category.models import Category

class FoodPromotion(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    dishes = models.ManyToManyField(Dish, related_name='food_promotions')
    description = models.TextField(blank=True, null=True)
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    valid_until = models.DateField()
    business = models.ForeignKey(RegisterBusiness, on_delete=models.CASCADE)
