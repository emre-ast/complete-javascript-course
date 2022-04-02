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

//Lecture 2
const luckyNumber = Math.trunc(Math.random() * 20) + 1;
const getScore = () => Number(document.querySelector('.score').textContent);
const setScoreZero = () => (document.querySelector('.score').textContent = 0);

const updateScore = () =>
  (document.querySelector('.score').textContent =
    Number(document.querySelector('.score').textContent) - 1);

function guessTheNumber() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a Number';
  } else if (guess < luckyNumber) {
    if (getScore() <= 1) {
      document.querySelector('.message').textContent = 'You Lost!';
      setScoreZero();
    } else {
      document.querySelector('.message').textContent = 'Too Low!';
      updateScore();
    }
  } else if (guess > luckyNumber) {
    if (getScore() <= 1) {
      document.querySelector('.message').textContent = 'You Lost!';
      setScoreZero();
    } else {
      document.querySelector('.message').textContent = 'Too High!';
      updateScore();
    }
  } else {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = luckyNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
}

document.querySelector('.check').addEventListener('click', guessTheNumber);
