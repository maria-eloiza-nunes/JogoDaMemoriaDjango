
const symbols = ['/static/img/imagem1.jpg', '/static/img/imagem2.jpg', '/static/img/imagem3.jpg', '/static/img/imagem4.jpg', '/static/img/imagem5.jpg', '/static/img/imagem6.jpg'];
const cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
const gameBoard = document.getElementById('game-board');
let flippedCards = [];
let flippedCount = 0;
let movesCount = 0;
const movesCounter = document.getElementById('moves-counter');
let nomeJogador = "";


cards.forEach((symbol, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;

    const frontFace = document.createElement('div');
    frontFace.classList.add('front-face');
    card.appendChild(frontFace);

    const backFace = document.createElement('div');
    backFace.classList.add('back-face');
    const img = document.createElement('img');
    img.src = symbol;
    backFace.appendChild(img);
    card.appendChild(backFace);

    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
});

function flipCard(card) {
    if (!card || flippedCards.length === 2 || card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    flippedCards.push(card);
    movesCount++;
    movesCounter.textContent = movesCount;

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = parseInt(card1.dataset.index);
    const index2 = parseInt(card2.dataset.index);

    if (cards[index1] === cards[index2]) {
        flippedCount += 2;
        if (flippedCount === cards.length) {
            alert('Parabéns! Você encontrou todos os pares!');
            document.getElementById("nomeJogador").value = nomeJogador;
            document.getElementById("tentativas").value = movesCounter.textContent;
            document.getElementById("add").submit();
        }
    } else {

        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000);
    }

    flippedCards = [];
}


window.onload = () => {
    nomeJogador = localStorage.getItem('nomeJogador');
}