
var myPlayers = [];
const p1 = 'player1';
const p2 = 'player2';
myPlayers.push(new makePlayer(p1));
myPlayers.push(new makePlayer(p2));


function weakAttack(attacker, defender) {
  let arenaWidth = document.querySelector('.arena').offsetWidth;
  if (attacker === 'player1') {
    const p1 = document.querySelector('.p1');
    let weakAtkForward = 100 + (arenaWidth * .60);
    p1.style.setProperty('--p1-left', weakAtkForward + 'px');
    p1.style.setProperty('--p1-transition-type', 'linear');
    setTimeout(() => {
      p1.style.setProperty('--p1-left', 100 + 'px');
      p1.style.setProperty('--p1-transition-type', 'linear');
    }, 500);
  } else {
    const p2 = document.querySelector('.p2');
    let weakAtkForward = 100 + (arenaWidth * .60);
    p2.style.setProperty('--p2-right', weakAtkForward + 'px');
    p2.style.setProperty('--p2-transition-type', 'linear');
    setTimeout(() => {
      p2.style.setProperty('--p2-right', 100 + 'px');
      p2.style.setProperty('--p2-transition-type', 'linear');
    }, 500);
  }
}