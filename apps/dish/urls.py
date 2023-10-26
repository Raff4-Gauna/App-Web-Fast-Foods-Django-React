from django.urls import path

from .views import *


urlpatterns = [
    path('', DishListView.as_view()),
    path('category/<category_id>', DishListCategoryView.as_view()),
    path('<post_slug>', PostDetailView.as_view()),
    path("search/<str:search_term>",SearchDishView.as_view()),
]
