const diceRoller = () => {
  //basic 1-6 pRNG
  return Math.floor(Math.random() * 6 + 1);
};

const diceImgList = [
  //possible dice images
  './img/dice1.png',
  './img/dice2.png',
  './img/dice3.png',
  './img/dice4.png',
  './img/dice5.png',
  './img/dice6.png',
];
const newGame = document.getElementById('new-game');
const rollDice = document.getElementById('roll-dice');
const hold = document.getElementById('hold');
const players = document.getElementsByClassName('player-container');
const playerLabel = document.getElementsByClassName('player-name');
const playerRoll = document.getElementsByClassName('current-roll');
const scores = document.getElementsByClassName('score');
const diceImg = document.getElementById('dice-image');
rollDice.disabled = true;
hold.disabled = true;
let currentPlayer;
let rolled;
let tempScore = [0, 0];
newGame.addEventListener('click', () => {
  tempScore = [0, 0];
  currentPlayer = 0;
  for (i = 0; i < 2; i++) {
    scores[i].innerHTML = 'Current <br> 0';
    playerLabel[i].style.fontSize = '40px';
    playerLabel[i].innerHTML = `Player ${i + 1}`;
    playerRoll[i].textContent = 0;
  }
  players[0].style.backgroundColor = 'white';
  players[1].style.backgroundColor = 'wheat';
  rollDice.disabled = false;
  hold.disabled = false;
});
rollDice.addEventListener('click', () => {
  rolled = diceRoller();
  tempScore[currentPlayer] += rolled;
  scores[currentPlayer].innerHTML = `Current <br>${tempScore[currentPlayer]}`;
  playerRoll[currentPlayer].textContent = rolled;
  diceImg.src = diceImgList[rolled - 1];
  if (rolled == 1) {
    playerLabel[currentPlayer].innerHTML = 'Loser! <br> Play again?';
    playerLabel[currentPlayer].style.fontSize = '20px';
    rollDice.disabled = true;
    hold.disabled = true;
  } else if (tempScore[currentPlayer] >= 20) {
    playerLabel[currentPlayer].innerHTML = 'Winner <br> Play again?';
    playerLabel[currentPlayer].style.fontSize = '20px';
    rollDice.disabled = true;
    hold.disabled = true;
  } else if (currentPlayer == 1) {
    players[currentPlayer].style.backgroundColor = 'wheat';
    currentPlayer = 0;
    players[currentPlayer].style.backgroundColor = 'white';
  } else {
    players[currentPlayer].style.backgroundColor = 'wheat';
    currentPlayer = 1;
    players[currentPlayer].style.backgroundColor = 'white';
  }
});

hold.addEventListener('click', () =>{
    if (currentPlayer == 1) {
        players[currentPlayer].style.backgroundColor = 'wheat';
        currentPlayer = 0;
        players[currentPlayer].style.backgroundColor = 'white';
      } else {
        players[currentPlayer].style.backgroundColor = 'wheat';
        currentPlayer = 1;
        players[currentPlayer].style.backgroundColor = 'white';
      }
})