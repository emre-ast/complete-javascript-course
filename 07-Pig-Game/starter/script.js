'use strict';

const score0El = document.querySelector('#score--0');
const currentScore0El = document.querySelector('#current--0');
const player0El = document.querySelector('.player--0');

const score1El = document.getElementById('score--1');
const currentScore1El = document.querySelector('#current--1');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
let currentNumber;
let turn = 0;
const scores = [0, 0];

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

// resetGame();

function resetGame() {
  score0El.textContent = 0;
  currentScore0El.textContent = 0;

  score1El.textContent = 0;
  currentScore1El.textContent = 0;

  turn = 0;
  diceEl.classList.add('hidden');
}

function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
}

function rollDiceEvent() {
  currentNumber = rollDice();

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${currentNumber}.png`;

  if (currentNumber !== 1) {
    increaseCurrentScore(currentNumber);
  } else {
    changeActivePlayer();
  }
}

function increaseCurrentScore(number) {
  if (turn === 0) {
    currentScore0El.textContent = Number(currentScore0El.textContent) + number;
  } else if (turn === 1) {
    currentScore1El.textContent = Number(currentScore1El.textContent) + number;
  }
}

function resetCurrentScore() {
  if (turn === 0) {
    currentScore0El.textContent = 0;
  } else if (turn === 1) {
    currentScore1El.textContent = 0;
  }
}

function holdBtnEvent() {
  scores[turn] += Number(
    document.querySelector(`#current--${turn}`).textContent
  );
  document.querySelector(`#score--${turn}`).textContent = scores[turn];
  changeActivePlayer();
}

function changeActivePlayer() {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  resetCurrentScore();
  turn = (turn + 1) % 2;
}

rollDiceBtn.addEventListener('click', rollDiceEvent);
holdBtn.addEventListener('click', holdBtnEvent);
newGameBtn.addEventListener('click', resetGame);
