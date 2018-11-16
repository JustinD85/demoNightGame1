//Idk if you want all DOM stuff in one file or many, change it to make sense to you
console.log('hey');
import {
  Game
} from '../server/game.js';

import {
  get,
  getAll
} from '../utils/shortHandMethods.js';
//The above gives you the Game class, and shorthand query Selectors for your use;


/*Example game, just for show, please change to whatever you want.
You can view the methods available to you in game from looking at the game.js file */
const game = new Game();
game.createPlayer('duy', 'mage', true);
game.createPlayer('gabe', 'mage');
game.init(updateDOM)
/**
 * EXAMPLE FOR BUTTON, PLEASE CHANGE TO MAKE SENSE TO YOU.
 * ADDING EVENT LISTENER TO EACH BUTTON AND CHANGING VALUES.
 */

getAll('.normal-attack').forEach(function (button) {
  button.addEventListener('click', function (normalAttackButton) {
    if (normalAttackButton.target.closest('#player-one-section')) {
      myPlayers[0].createProjectile(myPlayers[1]);
      game.normalAttack('p1', updateDOM); //Only pass in the attacker
    } else if (normalAttackButton.target.closest('#player-two-section')) {
      myPlayers[1].createProjectile(myPlayers[0]);
      game.normalAttack('p2', updateDOM);
    }
  });
});

/*EXAMPLE CALLBACK FUNCTION */
function updateDOM(updatedPlayersAsJSON) {
  const playerObjectsInArray = JSON.parse(updatedPlayersAsJSON);
  playerObjectsInArray.forEach(function (player) {
    if (player.isP1) {
      get('#js-p1-name').innerText = player.name;
      get('#js-p1-health').value = player.health;
      get('#js-p1-energy').value = player.energy;
      get('#js-p1-mana').value = player.mana;
    } else {
      get('#js-p2-name').innerText = player.name;
      get('#js-p2-health').value = player.health;
      get('#js-p2-energy').value = player.energy;
      get('#js-p2-mana').value = player.mana;
    }
  });
}