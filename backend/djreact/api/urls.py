from django.contrib import admin
from django.urls import path,include
from api.views import ArticleListView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleListView, basename='articles')
urlpatterns = router.urls
