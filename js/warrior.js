class Warrior {
  constructor() {
    this.health = 200;
    this.energy = 120;
    this.mana = 75;
    this.isEnraged = false;
    this.ragePoints = 0;
  }
  wildSwing(attackee){
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
  leachStrike(attackee) {
    attackee.health -= 25;
    this.energy -= 45;
    this.health += 25;
  }
  berserker(attackee) {
    const rndDmg = Math.floor(Math.random() * 100);
    attackee.health = rndDmg;
    this.energy -= 90;
    if(this.isEnraged === true) {
      attackee.health = rndDmg + 25;
      this.isEnraged = false;
      this.energy -= 90;
    }
  }
}