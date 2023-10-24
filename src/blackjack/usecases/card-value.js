
/**
 * 
 * @param {String} card Ejemplo: '4C', '10D', 'KH'
 * @returns {Number} Devuelve el valor de la carta
 */

export const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === 'A') ? 11 : 10 : value * 1;
}