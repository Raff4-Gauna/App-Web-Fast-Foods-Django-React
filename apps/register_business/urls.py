from django.urls import path
from .views import *

urlpatterns = [
    path('list', RegisterBusinessListView.as_view()),
    path('create', RegisterBusinessCreateView.as_view()),
    # path('<post_slug>', RegisterBusinessDetailView.as_view()),
    # path('<int:pk>/', RegisterBusinessDetailView.as_view()), 
    path('<slug:business_slug>/', RegisterBusinessDetailView.as_view()),
]
