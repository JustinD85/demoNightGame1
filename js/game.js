//Duy's Area

class Player {
  constructor(myName, myClass, isP1) {
    this.name = myName; //js-p{num}-name
    this.class = myClass;
    this.health = 100; //
    this.energy = 150; //
    this.mana = 120; //
    this.burned = false;
    this.isStopped = false;
    this.isP1 = isP1 || false;
  }
  atkOne(inP) {
    if (this.nowRooted()) {
      console.log('I cant move!') //js-p{num}-status
    } else {
      game.attacks(this, inP);
    }

    log(this.health, inP.health);
  }
  atkTwo(inP) {
    if (this.class === 'warrior') {
      inP.health -= 20;
      this.energy -= 20;
      this.mana -= 10;
    }
    this.isBurned(this);
  }
  splOne(inP, spell) {
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

  // splTwo(inP, spell) {
  //   if (this.class === 'druid' && spell === 'vine') {
  //     inP.health -= 10;
  //     inP.isStopped = true;
  //     this.energy -= 5;
  //     this.mana -= 15;
  //   }
  //   this.isBurned(this);
  // }
  // healSelf() {
  //   this.health += 5;
  //   this.energy += 10;
  //   this.mana -= 10;
  //   this.isBurned(this);
  // }
  // dfndSelf() {
  //   this.health += 10;
  //   this.isBurned(this);
  // }
  isBurned(inP) {
    if (inP.burned === true) {
      inP.health -= 10;
      console.log('I am BURNIN!🔥')
    }
  }
  nowRooted(inP) {
    if (this.isStopped) {
      this.isStopped = !this.isStopped;
      return true;
    } else {
      return false;
    }
  }

}
const duy = new Player('Duy', 'warrior');
const gabe = new Player('Gabe', 'mage', true);
const justin = new Player('Idiomatic', 'warrior');

const playerArr = [duy, gabe];
// duy.init();
// gabe.init();
// List of classes that can be used!:
// Warrior;
// Wizard;
// Druid;









/**Justins area DON'T COME HERE BOIIIIIIIIIIIIIIIIII 💩 */

class Game {
  constructor() {
    this.players = [];
  }
  init(inP) {
    this.players.push(...inP);
    this.players.forEach((player) => {
      if (player.isP1) {
        get('#js-p1-name').innerText = player.name;
        get('#js-p1-health').value = player.health;
        get('#js-p1-energy').innerText = player.energy;
        get('#js-p1-mana').innerText = player.mana;
      } else {
        get('#js-p2-name').innerText = player.name;
        get('#js-p2-health').value = player.health;
        get('#js-p2-energy').innerText = player.energy;
        get('#js-p2-mana').innerText = player.mana;
      }
    });


  }

  attacks(atker, attkee) {
    attkee.health -= 10;
    atker.energy -= 10;
    atker.isBurned(attkee);
  }



}

getAll('.weakAttk').forEach(e => {
  e.addEventListener('click', (e) => {
    if (e.target.closest('#player-one-section')) {

      get('#js-p2-health').value -= 10;
    } else if (e.target.closest('#player-two-section')) {
      get('#js-p1-health').value -= 10;
      console.log(true);
    }
  });
})

// get('.weakAttk2').addEventListener('click', (e) => {

//   if (e.target.closest('#player-one-section')) {

//     get('#js-p2-health').value -= 10;
//   } else if (e.target.closest('#player-two-section')) {
//     get('#js-p1-health').value -= 10;
//     console.log(true);
//   }

// });

get('.heavyAttk').addEventListener('click', () => {
  get('#title').innerHTML = "<h1>heavy Attack</h1>";
});
const game = new Game();

function get(ele) {
  return document.querySelector(ele);
}

function getAll(eleArr) {
  return document.querySelectorAll(eleArr);
}

function log(inP1, inP2) {

}










/**MATT's Area Canvas boiiiiiiii */
const canv = get('canvas');
let ctx = canv.getContext('2d');
ctx.fillStyle = 'green';
ctx.border = '5px solid black';
ctx.fillRect(125, 75, 15, 15);