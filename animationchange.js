var playerHead = document.querySelectorAll(".headk");
var playerbody = document.querySelectorAll(".bodyk");
var playerFeet = document.querySelectorAll(".feetk");
var playerWeapon = document.querySelectorAll(".weaponk");

// document.querySelector(".normal-attack-one").addEventListener("click", playerOneNormalAnimation);
// document.querySelector(".heavy-attack-one").addEventListener("click", playerOneHeavyAnimation);
// document.querySelector(".normal-attack-two").addEventListener("click", playerTwoNormalAnimation);
// document.querySelector(".heavy-attack-two").addEventListener("click", playerTwoHeavyAnimation);

function playerOneNormalAnimation() {
  playerNormalAnimaiton(0);
  setTimeout(playerStandingAnimation, 800);
}

function playerOneHeavyAnimation() {
  playerHeavyAnimation(0);
  setTimeout(playerStandingAnimation, 800);
}

function playerTwoNormalAnimation() {
  playerNormalAnimaiton(1);
  setTimeout(playerStandingAnimation, 800);
}

function playerTwoHeavyAnimation() {
  playerHeavyAnimation(1);
  setTimeout(playerStandingAnimation, 800);
}

function playerStandingAnimation() {
  for(var i = 0; i < 2; i++) {
    playerHead[i].style.animation = "head 1s linear infinite";
    playerbody[i].style.animation = "body 1s linear infinite";
    playerWeapon[i].style.animation = "weapon 1s linear infinite";
  }
}

function playerNormalAnimaiton(player) {
  playerHead[player].style.animation = "normalh 0.8s linear";
  playerbody[player].style.animation = "normalb 0.8s linear";
  playerWeapon[player].style.animation = "normalw 0.8s linear";
  setTimeout(playerHurtAnimation, 200, player);
}

function playerHeavyAnimation(player) {
  playerHead[player].style.animation = "heavyh 0.8s linear";
  playerbody[player].style.animation = "heavyb 0.8s linear";
  playerWeapon[player].style.animation = "heavyw 0.8s linear";
  setTimeout(playerHurtAnimation, 200, player);
}

function playerHurtAnimation(player) {
  let enemy;
  if(player === 1) {
    enemy = 0;
  } else {
    enemy = 1;
  }
  playerHead[enemy].style.animation = "headh 0.8s linear";
  playerbody[enemy].style.animation = "bodyh 0.8s linear";
  playerFeet[enemy].style.animation = "feeth 0.8s linear"
  playerWeapon[enemy].style.animation = "weaponh 0.8s linear";
}