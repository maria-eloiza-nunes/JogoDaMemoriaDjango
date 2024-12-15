const button = document.querySelector('.btn-play');
const form = document.querySelector('.form');
document.getElementById('logoutBtn').addEventListener('click', function () {
    var logoutUrl = this.getAttribute('data-logout-url');
    window.location.href = logoutUrl;
});


const handleSubmit = (event) => {
    event.preventDefault();
    // localStorage.setItem('nomeJogador', input.value);
    window.location = 'jogo';
}

form.addEventListener('submit', handleSubmit);