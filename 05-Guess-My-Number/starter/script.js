'use strict';

//First Lecture
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 15;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 11;
console.log(document.querySelector('.guess').value);
*/

// Lecture 2
let luckyNumber = Math.trunc(Math.random() * 20) + 1;

const getScore = () => Number(document.querySelector('.score').textContent);
const setScore = newScore =>
  (document.querySelector('.score').textContent = newScore);
const updateScore = () =>
  (document.querySelector('.score').textContent =
    Number(document.querySelector('.score').textContent) - 1);

const getHighScore = () => document.querySelector('.highscore').textContent;
const updateHighscore = () =>
  Number(getScore()) > Number(getHighScore()) ? getScore() : getHighScore();

const setDisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function guessTheNumber() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a Number';
  } else if (guess !== luckyNumber) {
    if (getScore() <= 1) {
      setDisplayMessage('You Lost!');
      setScore(0);
    } else {
      setDisplayMessage(guess < luckyNumber ? 'Too Low!' : 'Too High!');
      updateScore();
    }
  } else {
    setDisplayMessage('Correct!');
    document.querySelector('.number').textContent = luckyNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.highscore').textContent = updateHighscore();
  }
}

const resetGame = function () {
  setDisplayMessage('Start Guessing...');
  setScore(20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //Draw new lucky number
  luckyNumber = Math.trunc(Math.random() * 20) + 1;

  //Resetting style of page back to start state
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', guessTheNumber);
document.querySelector('.again').addEventListener('click', resetGame);
