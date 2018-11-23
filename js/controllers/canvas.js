let canv;
let ctx;
let canvWidth;
let canvHeight;

var myPlayers = [];
var characterPlayer = new Image();
var projectileAnimation = new Image();
window.addEventListener("load", start);// change to when they pick characters


function start(){
  buildInitialPlayerAnimations();
  setInterval(runGameAnimation, 100);
}

function buildInitialPlayerAnimations() {
  canv = document.querySelector('canvas');
  ctx = canv.getContext('2d');
  canvWidth = canv.width;
  canvHeight = canv.height;

  const p1 = 'player1';
  const p2 = 'player2';
  myPlayers.push(new makePlayer(p1));
  myPlayers.push(new makePlayer(p2));
}

function runGameAnimation() {
  ctx.clearRect(0, 0, canvWidth, canvHeight);
  myPlayers.forEach(function(player) {
    if (player.currentProjectile) {
      player.updateProjectilePosition();
      projectileAnimation.src = player.projectile;
      ctx.drawImage(projectileAnimation,
                    player.projectileSrcX,
                    player.projectileSrcY,
                    player.projectileSpriteWidth,
                    player.projectileSpriteHeight,
                    player.projectileStartX,
                    player.projectileStartY,
                    player.projectileWidth,
                    player.projectileHeight);
    }
    if (player.currentWeakAtk) {
      player.updatePlayerWeakAtkPosition();
        
    }
    player.updatePlayerRestFrame();
    characterPlayer.src = player.rest;
    ctx.drawImage(characterPlayer,
                  player.restSrcX,
                  player.restSrcY,
                  player.restSpriteWidth,
                  player.restSpriteHeight,
                  player.x,
                  player.y,
                  player.w,
                  player.h);
  })
}

// function playerWeakAttack(attacker, defender) {
//   attacker.weakMeleeAttack(defender);
//   attackerStartX = attacker.x;
//   attackerStartY = attacker.y;
//   attackerDirection = attacker.direction;
//   attackerEndX = attacker.endX;
//   attackerPlayer = attacker.player;
//   attackerSpeed = attacker.speed + 1;
//   requestAnimationFrame(castWeakAttack);
// }

// function castWeakAttack() {
  
//   ctx.clearRect(attackerStartX, attackerStartY, 50, 50);
//   attackerStartX = attackerStartX + attackerDirection[0] + attackerSpeed;
//   if (attackerPlayer === 'player1') {
//     ctx.fillStyle = 'blue';
//   } else {
//     ctx.fillStyle = 'green';
//   }
  
//   ctx.fillRect(attackerStartX, attackerStartY, 50, 50);
//   if (attackerPlayer === 'player1' && attackerStartX > attackerEndX) {
//     ctx.clearRect(attackerStartX, attackerStartY, 50, 50);
//     return
//   } else if (attackerPlayer === 'player2' && attackerStartX < attackerEndX) {
//     ctx.clearRect(attackerStartX, attackerStartY, 50, 50);
//     return
//   } else {
//     // if (attackerSpeed < 5) {
//     // attackerSpeed = attackerSpeed + 1;
//     // }
//     requestAnimationFrame(castWeakAttack);
//   }
// }

// example weak attack
// playerWeakAttack(player1animation, player2animation);






// function checkProjectilePosition(proXVel, projYVel, projSizeX, projSizeY) {

//   if (proXVel + projSizeX === canvWidth) {
//     projectileDirection(proXVel, projYVel)
//   }
// }


// function projectileDirection(proXVel, projYVel) {
//   if (proXVel === undefined) {
//     return direction;
//   } else {
//     direction[0] = -direction[0];
//     return direction;
//   }
// }
