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
export function wildSwing(attackee) {
  this.ragePoints++
  attackee.health -= 10;
  this.energy -= 10
  if(this.ragePoints === 3) {
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
  attackee.health = rndDmg;
  this.energy -= 90;
  if(this.isEnraged === true) {
    attackee.health = rndDmg + 25;
    this.isEnraged = false;
    this.energy -= 90;
  }
}

export function heavyAttack(inP) {
  if (this.isRooted()) {
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

export function spellFire(inP, spell) {
  if (this.isRooted()) {
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

export function spellVine(inP, spell) {
  if (this.isRooted()) {
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

export function spellHealSelf() {
  if (this.isRooted()) {
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
export function abilityDefendSelf() {
  if (this.isRooted()) {
    console.log('I cant move!')
  } else {
    this.health += 10;
    this.energy -= 15;
    this.isBurned(this);
  }
}

//Warrior type ablilities