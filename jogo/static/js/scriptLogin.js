document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#loginForm');
    const submitButton = document.querySelector('#submitButton');

    form.addEventListener('submit', (event) => {
      const username = document.querySelector('#username').value.trim();
      const password = document.querySelector('#password').value.trim();
      localStorage.setItem('nomeJogador', username);
      
      if (!username || !password) {
        alert('Por favor, preencha todos os campos!');
        event.preventDefault();
        return;
      }
    });
  });