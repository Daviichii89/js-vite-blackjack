
/**
 * 
 * @param {Array<String>} deck Ejemplo: ['4C', '10D', 'KH']
 * @returns {String} Devuelve la carta que se ha sacado de la baraja
 */

export const askforCard = (deck) => {

    if (!deck || deck.length === 0) {
        alert('No hay cartas en la baraja, pulse en Nuevo Juego');
        throw 'No hay cartas en la baraja';
    }
    return deck.pop();
};