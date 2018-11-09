//Duy's Area


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
        get('#js-p1-energy').value = player.energy;
        get('#js-p1-mana').value = player.mana;
      } else {
        get('#js-p2-name').innerText = player.name;
        get('#js-p2-health').value = player.health;
        get('#js-p2-energy').value = player.energy;
        get('#js-p2-mana').value = player.mana;
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
