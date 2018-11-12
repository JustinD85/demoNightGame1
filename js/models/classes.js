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
    health: 50,
    mana: 90,
    energy: 60,
    normalAttack: abilities.normalAttack,
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
    energy: 120,
    mana: 75,
    normalAttack: abilities.wildSwing,
    heavyAttack: abilities.leachStrike,
    specialAttack: abilities.berserker,
    equipment: {
      hand: equip.basicSword
    },
    statusEffects: effectsList,
    ailments: checks
  }
}
