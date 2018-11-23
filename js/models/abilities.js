import * as check from '../models/status.js';

export function normalAttack(attackee) {
  const attacker = this;
  if (attacker.statusEffects.isRooted) {
    attacker.statusEffects.isRooted = !attacker.statusEffets.isRooted;
    console.log('I cant move!')
  } else {
    if (attacker.energy > 9 && attackee.health > 0) {
      attackee.health -= 10;
      attacker.energy -= 10;
    } else {
      console.log('Sorry can\'t attack! Too tired, or target is dead')
    }
  }
}

/* 
Example template:

export function 'nameOfAbility'(attackee){
  // 'this' means attacker!
  //Your logic here, all functions must look like this!!!
  }
}
*/


// export function heavyAttack(inP) {
//   inP.health -= 20;
//   this.energy -= 20;
//   this.mana -= 10;
//   this.isBurned(this);
// }

// Wizzard Type Abilities
export function spellFire(inP) {
    inP.health -= 15;
    inP.isBurned = true;
    this.energy -= 10;
    this.mana -= 15;
}
export function spellHydro(inP) {
    inP.isBurned = false;
    inP.energy -= 10;
    this.energy -= 10;
    this.mana -= 10;
}

export function spellNova(inP) {
    const rndNova = Math.floor(Math.random() * 50) + 25;
    inP.health -= rndNova;
    this.health -= rndNova;
    this.mana -= 50;
    this.energy -= 50;
}

// Warlock Type Abilities

export function spellVine(inP, spell) {
    inP.health -= 10;
    inP.isStopped = true;
    this.energy -= 5;
    this.mana -= 15;
  // if (this.isRooted()) {
  //   console.log('I cant move!')
  // }
  // if (this.class !== 'druid') {
  //   return 'I cant use this'
  // }
  // if (this.class === 'druid' && spell === 'vine') {
  // }
  // this.isBurned(this);
}

//Warrior type ablilities

export function wildSwing(attackee) {
  this.ragePoints++
  attackee.health -= 10;
  this.energy -= 10
  if (this.ragePoints === 3) {
    this.isEnraged = true;
    attackee.health -= 20;
    this.energy -= 15;
  } else if (this.ragePoints === 4) {
    this.ragePoints = 0;
    this.isEnraged = false;
  }
}

export function leachStrike(attackee) {
  attackee.health -= 25;
  this.energy -= 45;
  this.health += 25;
}

export function berserker(attackee) {
  const rndDmg = Math.floor(Math.random() * 100);
  if (this.isEnraged) {
    attackee.health -= rndDmg + 25;
    this.health -= rndDmg;
    this.energy -= 90;
  } else {
    attackee.health -= rndDmg;
    this.health -= rndDmg;
    this.isEnraged = false;
    this.energy -= 90;
  }
}

//Knight Type Abilities

export function swordSwing(attackee) {
  bleedHits++
  attackee.health -= 15;
  attackee.isBleeding = true;
  this.energy -= 15;
  this.mana -= 5;
}

export function shieldBash(attackee) {
  attackee.health -= 25;
  this.energy -= 35;
  this.mana -= 10;
  if(attackee.energy <= 50) {
    attackee.energy -= 25;
    this.energy += 20;
  } else if( attackee.mana <= 50) {
    attackee.mana -= 25;
    this.mana += 25;
  }
}

export function forTheKing(attackee) {
  attackee.health -= 10;
  this.energy -= 50;
  this.mana -= 50;
  if(attackee.bleedHits >= 3) {
    attackee.health -= 50;
    this.energy -= 40;
    this.mana -= 40;
  }
}

// All Type Abilities

export function spellHealSelf() {
  this.potions++
  if (this.potions <= 5) {
    this.health += 5;
    this.energy += 10;
    this.mana -= 10;
  } else {
    return 'no heals for me'
  }

}
export function abilityDefendSelf() {
    this.health += 10;
    this.energy -= 20;
}











