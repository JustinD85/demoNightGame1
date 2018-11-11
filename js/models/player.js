/*PURPOSE: To have the base functionality of a player. This is different than game specific logic. An example
is that players can have login information and game histories. Game logic will have what each class in a 
game does. */
import {
  basicSword
} from './equipment.js';
import {
  normalAttack
} from './abilities.js';

class Player {
  constructor(myName, myClass, isP1) {
    this.name = myName; //js-p{num}-name
    this.class = myClass;
    this.health = 100;
    this.energy = 90;
    this.mana = 70;
    this.dmg = 10;
    this.equipment = {
      helmet: null,
      armor: null,
      weapon: null,
      pocket: {
        potions: []
      }
    };
    this.ailments = {
      isBurned: false,
      isRooted: false
    };
    this.baseStats = {
      health: 100,
      energy: 100,
      mana: 90
    };
    myClass => {
      /**Will have default behaviour depending on class */
      return game.chooseClass(myClass);
    };
    // this.health = 100; 
    // this.energy = 150; 
    // this.mana = 120; 
    // this.burned = false;
    // this.isStopped = false;
    this.isP1 = isP1 || false;
    // this.potions = 0;
  }

  atkTwo(inP) {
    if (this.nowRooted()) {
      console.log('I cant move!')
    }
    if (this.class !== 'warrior') {
      return 'I cant use this'
    }
    if (this.class === 'warrior') {
      inP.health -= 20;
      this.energy -= 20;
      this.mana -= 10;
    }
    this.isBurned(this);
  }
  splOne(inP, spell) {
    if (this.nowRooted()) {
      console.log('I cant move!')
    }
    if (this.class !== 'mage' && spell === 'fire') {
      return 'I cant use this'
    }
    if (this.class === 'mage' && spell === 'fire') {
      inP.health -= 15;
      inp.burned = true;
      this.energy -= 10;
      this.mana -= 15;
    } else if (spell === 'hydro') {
      inP.burned = false;
      this.energy -= 10;
      this.mana -= 10;
    }
    this.isBurned(this);
  }

  splTwo(inP, spell) {
    if (this.nowRooted()) {
      console.log('I cant move!')
    }
    if (this.class !== 'druid') {
      return 'I cant use this'
    }
    if (this.class === 'druid' && spell === 'vine') {
      inP.health -= 10;
      inP.isStopped = true;
      this.energy -= 5;
      this.mana -= 15;
    }
    this.isBurned(this);
  }
  healSelf() {
    if (this.nowRooted()) {
      console.log('I cant move!')
    } else {
      this.potions++
      if (this.potions <= 5) {
        this.health += 5;
        this.energy += 10;
        this.mana -= 10;
        this.isBurned(this);
      } else {
        return 'no heals for me'
      }
    }
  }
  dfndSelf() {
    if (this.nowRooted()) {
      console.log('I cant move!')
    } else {
      this.health += 10;
      this.energy -= 15;
      this.isBurned(this);
    }
  }
  isBurned(inP) {
    if (inP.burned === true) {
      inP.health -= 10;
      console.log('I am BURNIN!🔥')
    }
  }
  nowRooted() {
    if (this.isStopped) {
      this.isStopped = !this.isStopped;
      return true;
    } else {
      return false;
    }
  }
}

export {
  Player
}