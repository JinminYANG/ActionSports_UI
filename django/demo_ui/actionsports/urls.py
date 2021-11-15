from django.urls import path
from actionsports import views

urlpatterns = [
    path('', views.index, name='index'),
    path('action_live/', views.action_live, name='action_live'),
    path('fan_page/', views.fan_page, name='fan_page'),
    path('fan_page/detail/', views.fan_page_detail, name='fan_page_detail'),
    path('introduce/', views.introduce, name='introduce'),
]