/*PURPOSE: To have the base functionality of a player. This is different than game specific logic. An example
is that players can have login information and game histories. Game logic will have what each class in a 
game does. */
import * as classes from './classes.js'

class Player {
  constructor(myName, myClass, isP1) {
    this.class = myClass;
    this.name = myName;
    this.isP1 = isP1 || false;
    this.message = 'Ready!';
    return { ...this,
      ...classes[myClass]()
    }
  }
spellHealSelf() {
  this.potions++
  if (this.potions <= 5) {
    this.health += 5;
    this.energy += 10;
    this.mana -= 10;
  } else {
    return 'no heals for me'
    }
  }
abilityDefendSelf() {
    this.health += 10;
    this.energy -= 20;
  }
}

export {
  Player
}