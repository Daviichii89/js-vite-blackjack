
/**
 * 
 * @param {Number} playerPoints El número de puntos del jugador
 * @param {Number} computerPoints El número de puntos de la computadora
 */

export const determineWinner = (playerPoints, computerPoints) => {  
    setTimeout(() => {
        if (computerPoints === playerPoints) {
            alert('Tie. Try again!');
        } else if (playerPoints > 21) {
            alert('You lost, computer wins!');
        } else if (computerPoints > 21) {
            alert('You win, congratulations!!');
        } else {
            alert('You lost, computer wins!');
        }
    }, 500);
};