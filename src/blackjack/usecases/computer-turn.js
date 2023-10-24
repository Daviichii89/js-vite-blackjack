import { askforCard, createCard, cardValue, determineWinner } from "./";

/**
 * 
 * @param {Number} minPoints Ejemplo: 21
 * @param {HTMLElement} playersPointsContainer Ejemplo: [small, small] 
 * @param {HTMLElement} computerCardsContainer Ejemplo: div#computer-cards
 * @param {Array<String>} deck Ejemplo: ['2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S']
 
 */

export const computerTurn = (
    minPoints,
    playersPointsContainer,
    computerCardsContainer,
    deck,
) => {

    if (!minPoints) {
        throw 'No se ha indicado el mínimo de puntos';
    }
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en la baraja';
    }

    let computerPoints = 0;

    do {
        const card = askforCard(deck);

        computerPoints = computerPoints + cardValue(card);
        playersPointsContainer.innerText = computerPoints;
        const imgCard = createCard(card);
        computerCardsContainer.append(imgCard);
    } while (computerPoints < minPoints && minPoints <= 21);
    determineWinner(minPoints, computerPoints);
}