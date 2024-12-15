from django.shortcuts import render, redirect
from .models import Jogador
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.contrib.auth import logout

def index(request):
    return render(request, 'index.html')

def jogo(request):
    if request.user.is_authenticated:
        return render(request, 'jogo.html')
  
    return redirect('login')

def login_view(request):
    return render(request, 'login.html')

def ranking(request):
    jogadores = Jogador.objects.all().order_by("tentativas", "-data").values()
    return render(request, 'ranking.html', {'jogadores':jogadores})

def add(request):
  x=request.POST['nomeJogador']
  y=request.POST['tentativas']
  jogador=Jogador(nomeJogador=x, tentativas=y, user=request.user)
  jogador.save()
  return redirect("/")

class CustomLoginView(LoginView):
    template_name = 'login.html'
    success_url = reverse_lazy('jogo')
    
    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = User.objects.filter(username=username).first()
        if not user:
            user = User.objects.create_user(username=username, password=password)
            messages.success(request, 'Usuário criado com sucesso! Faça login para continuar.')

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            
            return redirect(self.success_url)
        else:
            messages.error(request, 'Falha no login. Verifique as informações e tente novamente.')
            return render(request, self.template_name)
