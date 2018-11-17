/*These have all stats each class needs and will be imported to the attacker */
import * as abilities from '../models/abilities.js';
import * as equip from '../models/equipment.js';
import {
  effectsList,
  checks,
} from '../models/status.js'

export function wizzard() {
  return {
    health: 125,
    maxHealth:100,
    mana: 200,
    maxMana: 200,
    maxEnergy: 200,
    energy: 200,
    normalAttack: abilities.spellFire,
    heavyAttack: abilities.spellHydro,
    specialAttack: abilities.spellNova,
    equipment: {
      hand: equip.basicSword
    },
    statusEffects: effectsList,
    ailments: checks
  }
}

export function warrior() {
  return {
    health: 200,
    maxHealth: 200,
    energy: 120,
    maxEnergy: 120,
    mana: 75,
    maxMana:75,
    normalAttack: abilities.wildSwing,
    heavyAttack: abilities.leachStrike,
    specialAttack: abilities.berserker,
    equipment: {
      hand: equip.basicSword
    },
    ...effectsList,
    ailments: checks
  }
}

export function knight() {
  return {
    health: 250,
    maxHealth: 250,
    energy: 120,
    maxEnergy: 120,
    mana: 100,
    maxMana: 100,
    normalAttack: abilities.swordSwing,
    heavyAttack: abilities.shieldBash,
    specialAttack: abilities.forTheKing,
    equipment: {
      hand: equip.basicSword
    },
    ...effectsList,
    ailments: checks
  }
}

export function warlock() {
  return {
    health: 500,
    maxHealth: 500,
    energy: 100,
    maxEnergy: 100,
    mana: 50,
    maxMana: 50,
    normalAttack: abilities.spellVine,
    heavyAttack: abilities.darkSphere,
    specialAttack: abilities.superGravity,
    equipment: {
      hand: equip.basicSword
    },
    ...effectsList,
    ailments: checks
  }
}
