'use strict';

//First Lecture
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 15;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 11;
console.log(document.querySelector('.guess').value);
