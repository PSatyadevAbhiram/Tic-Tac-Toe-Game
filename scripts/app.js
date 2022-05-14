let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameOverFlag = false;
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("game");
const gameFieldElements = document.querySelectorAll("#game-board li");
const gameOverElement = document.getElementById('game-over');

const editP1Button = document.getElementById("edit-p1");
const editP2Button = document.getElementById("edit-p2");
const cancelButtonElement = document.getElementById("cancel-config-btn");
const startGameBtn = document.getElementById("start-game-btn");
const playerTurn = document.getElementById('active-player-name');

editP1Button.addEventListener("click", openPlayerConfig);
editP2Button.addEventListener("click", openPlayerConfig);
cancelButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startGameBtn.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
