class Player {
  constructor(myName, myClass) {
    this.name = myName;
    this.class = myClass;
    this.health = 100;
    this.energy = 100;
    this.mana = 100;
    this.burned = false;
    this.isStopped = false;
  }
  atkOne(inP) {
    if (this.nowRooted()) {
      console.log('I cant move!')
    } else {
      inP.health -= 10;
      this.energy -= 10;
      this.isBurned(this);
    }
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
  splTwo(inP, spell) {
    if (this.class === 'druid' && spell === 'vine') {
      inP.health -= 10;
      inP.isStopped = true;
      this.energy -= 5;
      this.mana -= 15;
    }
    this.isBurned(this);
  }
  healSelf() {
    this.health += 5;
    this.energy += 10;
    this.mana -= 10;
    this.isBurned(this);
  }
  dfndSelf() {
    this.health += 10;
    this.isBurned(this);
  }
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
const duy = new Player('Duy', 'druid');
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

const canv = get('canvas');
let ctx = canv.getContext('2d');
ctx.fillStyle = 'green';
ctx.border = '5px solid black';
ctx.fillRect(125, 75, 15, 15);