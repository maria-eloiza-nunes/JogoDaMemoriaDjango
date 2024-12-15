const button = document.querySelector('.btn-play');
const form = document.querySelector('.form');

const handleSubmit= (event) => {
    event.preventDefault();
    // localStorage.setItem('nomeJogador', input.value);
    window.location = 'jogo';
}

form.addEventListener('submit', handleSubmit);