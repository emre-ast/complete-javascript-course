'use strict';

//Assignning HTML elements to variables for easiness while calling them multiple times
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

// console.log('Normal For Loop');
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// }

// console.log('For Each Loop');
// //ForEach Loop - Use iterators to loop the given array
// btnsOpenModal.forEach(element => {
//   console.log(element.textContent);
// });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Activeting Modal when the buttons are clicked
btnsOpenModal.forEach(element => {
  element.addEventListener('click', openModal);
});

//Deactiveting Modal when cross or overlay are clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
