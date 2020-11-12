const diceRoller = () => {
  return Math.floor(Math.random() * 6 + 1);
};

let rollButton = document.getElementById('roll-button'); //button to roll dice
const diceImgList = [
  //possible dice images
  './img/dice1.png',
  './img/dice2.png',
  './img/dice3.png',
  './img/dice4.png',
  './img/dice5.png',
  './img/dice6.png',
];
let winLose = document.getElementById('win-lose'); //loser message
let diceImg = document.getElementById('dice-image'); //dice display
let score = document.getElementById('score'); //score display
let restart = document.getElementById('restart');
let total = 0;

rollButton.addEventListener('click', () => {
  let roll = diceRoller();
  diceImg.src = diceImgList[roll - 1]; //displays die corresponding to your roll
  if (roll == 1) {
    //resets if a 1 is rolled
    winLose.innerHTML = 'You lose! <br> Play again?';
    restart.style.visibility = 'visible';
    rollButton.style.visibility = 'hidden';
  } else {
    winLose.innerHTML = '';
    total += roll; //adds the roll to a total
    rollButton.innerHTML = 'Roll again!'
  }
  if (total >= 20) {
    winLose.innerHTML = 'Congrats, you win!  <br> Play again?'; //displays winner message
    restart.style.visibility = 'visible';
    rollButton.style.visibility = 'hidden';
  }
  score.textContent = total; //updates the total
});
restart.addEventListener('click', () => {
  restart.style.visibility = 'hidden';
  rollButton.innerHTML = 'Roll the die!'
  rollButton.style.visibility = 'visible';
  winLose.innerHTML = '';
  score.textContent = total = 0;
});
