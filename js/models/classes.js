/*These have all stats each class needs and will be imported to the attacker */
import * as abilities from '../models/abilities.js';
import * as equip from '../models/equipment.js';
import {
  effectsList,
  checks,
} from '../models/status.js'

//Example
export function mage() {
  return {
    health: 100,
    maxHealth:100,
    mana: 90,
    maxMana: 90,
    maxEnergy:60,
    energy: 60,
    normalAttack: abilities.spellFire,
    heavyAttack: abilities.abilityDefendSelf,
    specialAttack: abilities.spellHealSelf,
    equipment: {
      hand: equip.basicSword
    },
    statusEffects: effectsList,
    ailments: checks
  }
}
//Example
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
