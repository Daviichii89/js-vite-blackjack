
/**
 * 
 * @param {Number} playerPoints El número de puntos del jugador
 * @param {Number} computerPoints El número de puntos de la computadora
 */

export const determineWinner = (playerPoints, computerPoints) => {  
    setTimeout(() => {
        if (computerPoints === playerPoints) {
            alert('Empate');
        } else if (playerPoints > 21) {
            alert('Has perdido');
        } else if (computerPoints > 21) {
            alert('Has ganado!!');
        } else {
            alert('Has perdido');
        }
    }, 500);
};