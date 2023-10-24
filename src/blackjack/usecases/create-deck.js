import _ from 'underscore';

/**
 * 
 * @param {Array<String>} cardSuits Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specialSuits Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} devuelve un array con las cartas de la baraja
 */

export const createDeck = (cardSuits, specialSuits) => {
    
    if (!cardSuits || cardSuits.length === 0) throw new Error('Los palos de la baraja son obligatorios');
    if (!specialSuits || specialSuits.length === 0) throw new Error('specualSuits de la baraja son obligatorios');
    
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let suit of cardSuits) {
            deck.push(i + suit);
        }
    }
    for (let suit of cardSuits) {
        for (let special of specialSuits) {
            deck.push(special + suit);
            
        }
    }
    return _.shuffle(deck);
}