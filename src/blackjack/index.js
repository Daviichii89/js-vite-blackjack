import _ from 'underscore';

import {createDeck, askforCard, cardValue, computerTurn, createCard} from './usecases';

let deck = [''];
const suits = ['C', 'D', 'H', 'S'],
      specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;

const btnAskFor = document.querySelector('#btnAskFor'),
      btnStop = document.querySelector('#btnStop'),
      btnNewGame = document.querySelector('#btnNewGame');

const playerCardsContainer = document.querySelector('#jugador-cartas'),
      computerCardsContainer = document.querySelector('#computadora-cartas'),
      playersPointsContainer = document.querySelectorAll('small');

deck = createDeck(suits, specials);

console.log(playerCardsContainer);
// const amountPoints = ( card, turn ) => {
//     playersPoints[turn] = playersPoints[turn] + cardValue(card);
//     playersPointsContainer[turn].innerText = playersPoints[turn];
//     return playersPoints[turn];
// }

btnAskFor.addEventListener('click', () => {
    const card = askforCard(deck);
    playerPoints = playerPoints + cardValue(card);
    playersPointsContainer[0].innerText = playerPoints;

    const imgCard = createCard(card);
    playerCardsContainer.append(imgCard);

    if (playerPoints > 21) {
        console.warn('Otra vez será. Perdiste');
        btnAskFor.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, playersPointsContainer[1], computerCardsContainer, deck);
    } else if (playerPoints === 21) {
        console.warn('21, genial!');
        btnAskFor.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, playersPointsContainer[1], computerCardsContainer, deck);
    }
});

btnStop.addEventListener('click', () => {
    btnAskFor.disabled = true;
    btnStop.disabled = true;
    computerTurn(playerPoints, playersPointsContainer[1], computerCardsContainer, deck);
});

btnNewGame.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = createDeck(suits, specials)
    playerPoints = 0;
    computerPoints = 0;
    // for (let i = 0; i < playerNum; i++) {
    //     playersPoints.push(0);
    // }

    playersPointsContainer.forEach(element => element.innerText = 0);
    playerCardsContainer.innerHTML = '';
    computerCardsContainer.innerHTML = '';

    btnAskFor.disabled = false;
    btnStop.disabled = false;
});
