'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabContents.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const opacityHandler = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', opacityHandler.bind(0.5));
nav.addEventListener('mouseout', opacityHandler.bind(1));

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  if (this.window.scrollY >= initialCoords.y) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

///////////////////////////////////////
//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (e) {});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

//Selecting Elements
//This method selects entire html code
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// // console.log(document.querySelectorAll('.section'));

// // console.log(document.getElementById('section--1'));
// const allButtons = document.getElementsByTagName('button');
// // console.log(allButtons);

// // console.log(document.getElementsByClassName('btn'));

// //Creating and inserting elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';

// //Those will insert new nodes as a child of header
// // header.prepend(message);
// // header.append(message);
// // header.append(message.cloneNode(true));

// //Those methods insert new nodes as a sibling of header
// // header.before(message.cloneNode(true));
// header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     //Modern way
//     message.remove();
//     //Legacy way
//     // message.parentElement.removeChild(message);
//   });

// // message.style.width = '120%';
// message.style.background = '#37383d';

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// console.log(Number.parseFloat(getComputedStyle(message).height));

// message.style.height = parseFloat(getComputedStyle(message).height) + 40 + 'px';
// // console.log(parseFloat(getComputedStyle(message).height) + 40 + 'px');

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// //Non-standart
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'bankist');

// //Returns absolute path
// console.log(logo.src);
// //Returns relative path
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Data Attributes
// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// //Dont use it. It will overwrite existing classes
// // logo.className = 'emre';

// console.log(logo.className);

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);

//   // console.log(e.target.getBoundingClientRect());

//   // console.log('Current scroll (X/Y): ', window.pageXOffset, window.pageYOffset);

//   // console.log(
//   //   'Height/width of viewport:',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   // console.log(s1coords.top, window.pageYOffset);
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListernet: Your cursor entered in area of h1');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min - 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();

//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// //Child elements
// const h1 = document.querySelector('h1');
// console.log(h1);

// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'white';

// //Parent element
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--color-tertiary-darker)';
// h1.closest('h1').style.background = 'var(--color-secondary-darker)';

// //Sibling element
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
