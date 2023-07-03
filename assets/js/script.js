// Generates your random number and changes image. //
const playersDice = Math.floor(Math.random() * 6) + 1;
const player = document.getElementById("player-choice");
player.setAttribute("src", "/assets/images/dice" + playersDice + ".webp");

//Generates opponents random number and changes dice image. //
const opponentsDice = Math.floor(Math.random() * 6) + 1;
const opponent = document.getElementById("opponent-choice");
opponent.setAttribute("src", "/assets/images/dice" + opponentsDice + ".webp");