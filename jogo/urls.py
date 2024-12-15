from django.urls import path
from . import views
from jogo.views import CustomLoginView
from django.contrib.auth import views as auth_views 

urlpatterns = [
    path('', views.index, name='index'),
    path('jogo/', views.jogo, name='jogo'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('ranking/', views.ranking, name='ranking'),
    path('add/', views.add, name="add"),
]
