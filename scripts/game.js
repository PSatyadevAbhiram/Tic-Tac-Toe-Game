function resetGame(){
    activePlayer = 0;
    currentRound = 1;
    gameOverFlag = false;
    gameOverElement.firstElementChild.innerHTML =  '<h2>You won, <span>PLAYER NAME</span></h2>';
    gameOverElement.style.display = 'none';
    for( let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j] = 0;
        }
    }
    for (const gameFieldElement of gameFieldElements) {
        gameFieldElement.textContent = '';
        gameFieldElement.classList.remove('disabled');
      }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Set custom player names");
    return;
  }
  resetGame();
  gameAreaElement.style.display = "block";
  playerTurn.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (gameData[event.target.dataset.row][event.target.dataset.col] > 0) {
    alert("Please select an empty field.");
    return;
  }
  if(gameOverFlag){
      return;
  }
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  gameData[event.target.dataset.row][event.target.dataset.col] = activePlayer + 1;
  const winnerId = checkGameOver();
  if (winnerId !== -2) {
    endGame(winnerId);
  } else {
    currentRound++;
    switchPlayer();
    playerTurn.textContent = players[activePlayer].name;
  }
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function checkGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return -2;
}

function endGame(winnerId) {
    gameOverFlag = true;
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    gameOverElement.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw :(";
  }
}
