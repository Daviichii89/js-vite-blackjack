
/**
 * 
 * @param {Number} playerPoints El número de puntos del jugador
 * @param {Number} computerPoints El número de puntos de la computadora
 */

export const determineWinner = (playerPoints, computerPoints) => {  
    setTimeout(() => {
        if (computerPoints === playerPoints) {
            alert('Empate. Prueba de nuevo!');
        } else if (playerPoints > 21) {
            alert('Has perdido, la computadora ha ganado');
        } else if (computerPoints > 21) {
            alert('Has ganado, enhorabuena!!');
        } else {
            alert('Has perdido, la computadora ha ganado');
        }
    }, 500);
};