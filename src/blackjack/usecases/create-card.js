
/**
 * 
 * @param {String} card Ejemplo: '2C'
 * @returns {HTMLImageElement} Devuelve una imagen con la carta
 */

export const createCard = (card) => {
    
    if (!card) {
        throw 'No se ha indicado la carta';
    }

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add('carta');
    imgCard.alt = `Carta ${card}`;
    
    return imgCard;
}