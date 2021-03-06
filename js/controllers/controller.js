//Idk if you want all DOM stuff in one file or many, change it to make sense to you
import {
  Game
} from '../server/game.js';

import {
  get,
  getAll,
  message
} from '../utils/shortHandMethods.js';
//The above gives you the Game class, and shorthand query Selectors for your use;


/*Example game, just for show, please change to whatever you want.
You can view the methods available to you in game from looking at the game.js file */
const game = new Game();
game.createPlayer('duy', 'warrior', true);
game.createPlayer('gabe', 'wizard');
game.init(updateDOM)
/**
 * EXAMPLE FOR BUTTON, PLEASE CHANGE TO MAKE SENSE TO YOU.
 * ADDING EVENT LISTENER TO EACH BUTTON AND CHANGING VALUES.
 */

getAll('.normal-attack').forEach(function (button) {
  button.addEventListener('click', function (normalAttackButton) {
    if (normalAttackButton.target.closest('#player-one-section')) {
      game.normalAttack('p1', updateDOM) && playerOneNormalAnimation();//&& weakAttack('player1', 'player2');
    } else if (normalAttackButton.target.closest('#player-two-section')) {
      game.normalAttack('p2', updateDOM) && playerTwoNormalAnimation();//&& weakAttack('player2', 'player1');
    }
  });
});

getAll('.heavy-attack').forEach(function (button) {
  button.addEventListener('click', function (heavyAttackButton) {
    if (heavyAttackButton.target.closest('#player-one-section')) {
      game.heavyAttack('p1', updateDOM) && playerOneHeavyAnimation();
    } else if (heavyAttackButton.target.closest('#player-two-section')) {
      game.heavyAttack('p2', updateDOM) && playerTwoHeavyAnimation();
    }
  });
});

getAll('.special-attack').forEach(function (button) {
  button.addEventListener('click', function (specialAttackButton) {
    if (specialAttackButton.target.closest('#player-one-section')) {
     
      game.specialAttack('p1', updateDOM); //Only pass in the attacker
    } else if (specialAttackButton.target.closest('#player-two-section')) {
      
      game.specialAttack('p2', updateDOM);
    }
  });
});

/*EXAMPLE CALLBACK FUNCTION */
function updateDOM(updatedPlayersAsJSON, msg) {
  const playerObjectsInArray = JSON.parse(updatedPlayersAsJSON);
  playerObjectsInArray.forEach(function (player) {
    if (player.isP1) {
      get('#js-p1-name').innerText = player.name;
      get('#js-p1-health').value = player.health / player.maxHealth * 100;
      get('#js-p1-energy').value = player.energy / player.maxEnergy * 100;
      get('#js-p1-mana').value = player.mana / player.maxMana * 100;
      get('.p1-result').innerText = player.message || ``;
    } else{
      get('#js-p2-name').innerText = player.name;
      get('#js-p2-health').value = player.health / player.maxHealth * 100;
      get('#js-p2-energy').value = player.energy / player.maxEnergy * 100;
      get('#js-p2-mana').value = player.mana / player.maxMana * 100;
      get('.p2-result').innerText = player.message || ``;
    } 
  });
  message(msg);
}
