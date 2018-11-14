const canv = document.querySelector('canvas');

let ctx = canv.getContext('2d');
// var projX = 200;
var projY = 100; //change to dynamic
var direction = [0, 0];
const p1 = 'player1';
const p2 = 'player2';

if (canv.getContext) {
  var myRect = [];
  myRect.push(new makePlayer(p1));
  myRect.push(new makePlayer(p2));

  for (var i in myRect) {
    oRec = myRect[i];
    ctx.fillStyle = oRec.fill;
    ctx.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);
  }
}
const player1animation = myRect[0];
const player2animation = myRect[1];

// example casts
// playerCast(player1animation, player2animation);
// playerCast(player2animation, player1animation);


function playerCast(attacker, defender) {
  attacker.createProjectile(defender);
  projX = attacker.startX;
  direction = attacker.direction;
  projEndX = attacker.endX;
  requestAnimationFrame(castProjectile);

}

function castProjectile() {
  ctx.clearRect(projX, projY, 15, 15);
  projX = projX + direction[0];
  ctx.fillStyle = 'red';
  ctx.fillRect(projX, projY, 15, 15);
  if (projX === projEndX) {
    ctx.clearRect(projX, projY, 15, 15);
    return
  } else {
    requestAnimationFrame(castProjectile);
  }
}

function playerWeakAttack(attacker, defender) {
  attacker.weakMeleeAttack(defender);
  attackerStartX = attacker.x;
  attackerStartY = attacker.y;
  attackerDirection = attacker.direction;
  attackerEndX = attacker.endX;
  attackerPlayer = attacker.player;
  attackerSpeed = attacker.speed + 1;
  requestAnimationFrame(castWeakAttack);
}

function castWeakAttack() {

  ctx.clearRect(attackerStartX, attackerStartY, 50, 50);
  attackerStartX = attackerStartX + attackerDirection[0] + attackerSpeed;
  if (attackerPlayer === 'player1') {
    ctx.fillStyle = 'blue';
  } else {
    ctx.fillStyle = 'green';
  }

  ctx.fillRect(attackerStartX, attackerStartY, 50, 50);
  if (attackerPlayer === 'player1' && attackerStartX > attackerEndX) {
    ctx.clearRect(attackerStartX, attackerStartY, 50, 50);
    return
  } else if (attackerPlayer === 'player2' && attackerStartX < attackerEndX) {
    ctx.clearRect(attackerStartX, attackerStartY, 50, 50);
    return
  } else {
    // if (attackerSpeed < 5) {
    // attackerSpeed = attackerSpeed + 1;
    // }
    requestAnimationFrame(castWeakAttack);
  }
}

// example weak attack
playerWeakAttack(player1animation, player2animation);






// function checkProjectilePosition(proXVel, projYVel, projSizeX, projSizeY) {
//   const canvWidth = canv.width;
//   const canvHeight = canv.height;
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
 