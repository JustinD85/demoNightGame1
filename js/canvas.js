const canv = document.querySelector('canvas');
var moveBlob = setInterval(myTimer, 16);
let ctx = canv.getContext('2d');
let projX = 200;
let projY = 100;
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

function myTimer() {
  ctx.clearRect(projX, projY, 15, 15);
  checkProjectilePosition(projX, projY, 15, 15);
  projectileDirection();
  projX = projX + direction[0];
  ctx.fillStyle = 'green';
  ctx.fillRect(projX, projY, 15, 15);
}

function checkProjectilePosition(proXVel, projYVel, projSizeX, projSizeY) {
  const canvWidth = canv.width;
  const canvHeight = canv.height;
  if (proXVel + projSizeX === canvWidth) {
    projectileDirection(proXVel, projYVel)
  }
}

var direction = [1, 0];

function projectileDirection(proXVel, projYVel) {
  if (proXVel === undefined) {
    return direction;
  } else {
    direction[0] = -direction[0];
    return direction;
  }
}