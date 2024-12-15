from django.contrib import admin
from .models import Jogador

class Administrador(admin.ModelAdmin):
    list_display="nomeJogador","tentativas","data"

admin.site.register(Jogador, Administrador)