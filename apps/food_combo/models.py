from django.db import models
from apps.register_business.models import RegisterBusiness
from apps.dish.models import Dish
from apps.category.models import Category

class FoodCombo(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    dishes = models.ManyToManyField(Dish, related_name='food_combos')
    business = models.ForeignKey(RegisterBusiness, on_delete=models.CASCADE)
