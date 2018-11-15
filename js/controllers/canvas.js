const canv = document.querySelector('canvas');
let ctx = canv.getContext('2d');
const canvWidth = canv.width;
const canvHeight = canv.height;
let curFrame = 0;
const frameCount = 8;

var spriteWidth = 864;
var spriteHeight = 280;

var rows = 2;
var cols = 8;

var width = spriteWidth / cols;
var height = spriteHeight / rows;

// var projX = 200;
var projY = 100; //change to dynamic
var direction = [0, 0];
const p1 = 'player1';
const p2 = 'player2';
var animationFrameTracker = 0;
// var img1 = new Image();
// var img2 = new Image();
var myPlayers = [];

window.addEventListener("load", buildInitialPlayerAnimations);

function buildInitialPlayerAnimations() {
  myPlayers.push(new makePlayer(p1));
  myPlayers.push(new makePlayer(p2));
}

function runGameAnimation() {
  updateFrame();
  var characterPlayer1 = new Image();
  var characterPlayer2 = new Image();
  characterPlayer1.src = myPlayers[0].rest;
  characterPlayer2.src = myPlayers[0].rest;
  ctx.drawImage(characterPlayer1, srcX, srcY, width, height, myPlayers[0].x, myPlayers[0].y, myPlayers[0].w, myPlayers[0].h);
  ctx.drawImage(characterPlayer2, srcX, 140, width, height, myPlayers[1].x, myPlayers[1].y, myPlayers[1].w, myPlayers[1].h);
}

function updateFrame() {
  ctx.clearRect(0, 0, canvWidth, canvHeight);
  curFrame = ++curFrame % frameCount;
  srcX = curFrame * width;
  srcY = 0;
}

setInterval(runGameAnimation, 100);
// if (canv.getContext) {
//   buildInitialPlayerAnimations();
//   requestAnimationFrame(runGameAnimation);
// }

// function buildInitialPlayerAnimations() {
  
//   myPlayers.push(new makePlayer(p1));
//   myPlayers.push(new makePlayer(p2));

//   var img1 = document.createElement('img'),
//     img2 = document.createElement('img')
//   count = 2;

//   /// image loading is async, make sure they are loaded
//   img1.onload = img2.onload = function () {
//     count--;
//     if (count === 0) drawImages();
//   }
//   img1.src = myPlayers[0].rest[0];
//   img2.src = myPlayers[1].img;

//   /// when loaded, draw them somewhere on the canvas
//   function drawImages() {
//     ctx.drawImage(img1, myPlayers[0].x, myPlayers[0].y, myPlayers[0].w, myPlayers[0].h);
//     ctx.drawImage(img2, myPlayers[1].x, myPlayers[1].y, myPlayers[1].w, myPlayers[1].h);
//   }
// }

// function runGameAnimation() {
//   var img1 = document.createElement('img'),
//     img2 = document.createElement('img')
//   count = 2;

//   /// image loading is async, make sure they are loaded
//   img1.onload = img2.onload = function () {
//     count--;
//     if (count === 0) drawImages();
//   }
//   if(myPlayers.restTracker === 0) {
//     img1.src = myPlayers[0].rest[0];
//     myPlayers.restTracker = 1;
//   } else {
//     img1.src = myPlayers[0].rest[1];
//     myPlayers.restTracker = 0;
//   }
  
//   img2.src = myPlayers[1].img;

//   /// when loaded, draw them somewhere on the canvas
//   function drawImages() {
//     ctx.drawImage(img1, myPlayers[0].x, myPlayers[0].y, myPlayers[0].w, myPlayers[0].h);
//     ctx.drawImage(img2, myPlayers[1].x, myPlayers[1].y, myPlayers[1].w, myPlayers[1].h);
//   }
//   // requestAnimationFrame(runGameAnimation);
// }

// // const player1animation = myRect[0];
// // const player2animation = myRect[1];

// // var img = new Image();
// // img.onload = function () {
// //   ctx.drawImage(img, 0, 0, 50, 50);
// // }
// // img.src = "imgs/characterAnimations/hidden-menu.svg"
// // example casts

// // playerCast(player1animation, player2animation);
// // playerCast(player2animation, player1animation);


// function playerCast(attacker, defender) {
//   attacker.createProjectile(defender);
//   projX = attacker.startX;
//   direction = attacker.direction;
//   projEndX = attacker.endX;
//   requestAnimationFrame(castProjectile);
  
// }

// function castProjectile() {
//   ctx.clearRect(projX, projY, 15, 15);
//   projX = projX + direction[0];
//   ctx.fillStyle = 'red';
//   ctx.fillRect(projX, projY, 15, 15);
//   if (projX === projEndX) {
//     ctx.clearRect(projX, projY, 15, 15);
//     return
//   } else {
//     requestAnimationFrame(castProjectile);
//   }
// }

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
