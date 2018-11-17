/**
 * These effects go on each player.
 * Add an effect, then you can check for it on the player
 */
export const effectsList = {
  isRooted: false,
  isBurned: false,
  isEnraged: false,
  isBleeding: false,
  ragePoints: 0,
  bleedHits: 0
}

//These will be checks for damage that can happen to a class
//If a warlock can't take fire dmg, then you make a checkfunction
// That doesn't have checks for shouldBurn and replace the 'check'
//function in the classes.js with your custom function
//funtions you make here go on line 20 as the value of ailments
//IMPORTANT to not call the function there, just type its name
//functions are called in the game.js
export function checks() {
  const player = this;
  shouldBurn(player);
}



//These are the effects of each effect
//These functions are not exported, you use these in the functions above 
//To check for w/e effects you give characters
function shouldBurn(player) {
  if (player.isBurned) {
    player.health -= 10;
    console.log(player)
    console.log('I am BURNIN!🔥')
  }
}

function shouldBleed(player) {
  if(player.isBleeding) {
    player.health -= 10;
  }
}
