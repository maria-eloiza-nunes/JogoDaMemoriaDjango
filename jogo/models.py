from django.db import models
from django.contrib import auth

class Jogador(models.Model):
  nomeJogador = models.CharField(max_length=100)
  tentativas = models.IntegerField()
  data = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey(auth.get_user_model(), on_delete=models.CASCADE)