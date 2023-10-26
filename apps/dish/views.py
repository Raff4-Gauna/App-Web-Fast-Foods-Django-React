from django.shortcuts import render, get_object_or_404
from apps.category.models import Category

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from django.db.models.query_utils import Q

from .models import Dish
from .DishSerializer import DishSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination


class DishListView(APIView):
    def get(self, request, format=None):
        if Dish.postobjects.all().exists():

            posts = Dish.postobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = DishSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class DishListCategoryView(APIView):
    def get(self, request, category_id, format=None):
        if Dish.postobjects.all().exists():
            
            category = Category.objects.get(id=category_id)
            posts = Dish.postobjects.all().filter(category=category)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = DishSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PostDetailView(APIView):
    def get(self, request, post_slug,format=None):
        post = get_object_or_404(Dish, slug=post_slug)
        serializer = DishSerializer(post)
        return Response({'post':serializer.data}, status=status.HTTP_200_OK)


class SearchDishView(APIView):

    def get(self,request,search_term):
        matches = Dish.postobjects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )

        paginator = MediumSetPagination()
        # results = paginator.paginate_queryset(matches, request)
        serializer = DishSerializer(matches, many=True)
        return Response({'filtered_posts':serializer.data},status=status.HTTP_200_OK)