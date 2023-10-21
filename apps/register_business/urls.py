from django.urls import path
from .views import *

urlpatterns = [
    path('list', RegisterBusinessListView.as_view()),
    path('create', RegisterBusinessCreateView.as_view()),
]
