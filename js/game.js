class Player {
  constructor(myName, myClass) {
    this.name = myName;
    this.class = myClass;
    this.health = 100;
    this.energy = 100;
    this.mana = 100;
    this.defend = false;
  }
  attackOne() {

  }
  attackTwo() {

  }
  spellOne() {

  }
  spellTwo() {

  }
  healSelf() {
    this.energy += 10;
    this.health += 10;
    this.mana += 10;
  }
  defendSelf() {
    this.defend = true;
    this.health += 5;
    if (this.defend === true) {

    }
  }
}
const duy = new Player('Duy');
const gabe = new Player('Gabe');
const justin = new Player('JazzyIdiomatic');
// List of classes that can be used!:
// Warrior;
// Wizard;
// Warlock;




















/**Justins area DON'T COME HERE BOIIIIIIIIIIIIIIIIII 💩 */
get('.weakAttk').addEventListener('click', () => {
  console.log('hit')
  get('#title').innerHTML = "<h1>Weak Attack</h1>";
})

get('.heavyAttk').addEventListener('click', () => {
  get('#title').innerHTML = "<h1>heavy Attack</h1>";
})

function get(ele) {
  return document.querySelector(ele);
}

function getAll(eleArr) {
  return document.querySelector(eleArr);
}