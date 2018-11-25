var playerHead = document.querySelectorAll(".headk");
var playerbody = document.querySelectorAll(".bodyk");
var playerfeet = document.querySelectorAll(".feetk");
var playerWeapon = document.querySelectorAll(".weaponk");

document.querySelector(".normal-attack-one").addEventListener("click", playerOneNormalAnimation);
document.querySelector(".heavy-attack-one").addEventListener("click", playerOneHeavyAnimation);
document.querySelector(".normal-attack-two").addEventListener("click", playerTwoNormalAnimation);
document.querySelector(".heavy-attack-two").addEventListener("click", playerTwoHeavyAnimation);

function playerOneNormalAnimation() {
  playerNormalAnimaiton(0);
  setTimeout(playerStandingAnimation, 1600, 0);
}

function playerOneHeavyAnimation() {
  playerHeavyAnimation(0);
  setTimeout(playerStandingAnimation, 1600, 0);
}

function playerTwoNormalAnimation() {
  playerNormalAnimaiton(1);
  setTimeout(playerStandingAnimation, 1600, 1);
}

function playerTwoHeavyAnimation() {
  playerHeavyAnimation(1);
  setTimeout(playerStandingAnimation, 1600, 1);
}

function playerStandingAnimation(player) {
  playerHead[player].style.animation = "head 0.3s linear infinite";
  playerbody[player].style.animation = "body 0.3s linear infinite";
  playerfeet[player].style.animation = "feet 0.3s linear infinite";
  playerWeapon[player].style.animation = "weapon 0.3s linear infinite";
}

function playerNormalAnimaiton(player) {
  playerHead[player].style.animation = "normalh 0.8s linear infinite";
  playerbody[player].style.animation = "normalb 0.8s linear infinite";
  playerfeet[player].style.animation = "normalf 0.8s linear infinite";
  playerWeapon[player].style.animation = "normalw 0.8s linear infinite";
}

function playerHeavyAnimation(player) {
  playerHead[player].style.animation = "heavyh 0.8s linear infinite";
  playerbody[player].style.animation = "heavyb 0.8s linear infinite";
  playerfeet[player].style.animation = "heavyf 0.8s linear infinite";
}