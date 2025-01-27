'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movenents) {
  //This method clears previous html data
  containerMovements.innerHTML = '';

  movenents.forEach(function (mov, i) {
    const movType = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movType}">
        ${i + 1} ${movType}
      </div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const user = 'Steven Thomas Williams';

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance} EUR`;
};

const calcDisplaySummary = function (account) {
  const sumIn = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, posMov) => acc + posMov, 0);

  labelSumIn.textContent = `${sumIn}€`;

  const sumOut = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, posMov) => acc + posMov, 0);

  labelSumOut.textContent = `${sumOut}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);

  labelSumInterest.textContent = `${interest}€`;
};

let personLoggedIn;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  personLoggedIn = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (personLoggedIn?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      personLoggedIn.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    displayMovements(personLoggedIn.movements);
    calcDisplaySummary(personLoggedIn);
    calcDisplayBalance(personLoggedIn.movements);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key) {
//   console.log(`${key}: ${value}`);
// });

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (mov, i) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

/////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5];

// //It is similar to slice method but this one mutates the array itself
// arr.splice(1, 2);
// console.log(arr);

// //It reverse the order of the array by mutating it
// arr.reverse();
// console.log(arr);

// const arr2 = [6, 7, 8, 9, 0];

// const mergedArr = arr.concat(arr2);
// console.log(mergedArr);
// console.log([...arr, ...arr2]);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctedDogsJulia = dogsJulia.slice(1, -2);
//   const allDogs = [...correctedDogsJulia, ...dogsKate];

//   allDogs.forEach(function (dogsAge, i) {
//     if (dogsAge >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogsAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// checkDogs(dogsJulia, dogsKate);

///////////////////////////////////////

// const euroToUsd = 1.1;

// movements.forEach(element => console.log(element));

// const movementsUSD = movements.map(function (value) {
//   return value * euroToUsd;
// });

// const movementsUSD = movements.map(value => value * euroToUsd);
// console.log(movementsUSD);

// movementsUSD.forEach(element => console.log(element));

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementDescriptions);

///////////////////////////////////////

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

///////////////////////////////////////

// //First parameter is call back fn, second one is initial value of accumulator
// const balance = movements.reduce(function (acc, mov, i) {
//   return acc + mov;
// }, 0);

// console.log(movements);
// console.log(balance);

// const max = movements.reduce(
//   (acc, mov) => (acc = mov > acc ? mov : acc),
//   movements[0]
// );
// console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   console.log(ages);

//   const humanwiseDogAges = ages.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
//   console.log(humanwiseDogAges);

//   const filteredHumanwiseAges = humanwiseDogAges.filter(age => age >= 18);
//   console.log(filteredHumanwiseAges);

//   const avgAge =
//     filteredHumanwiseAges.reduce((acc, age) => acc + age, 0) /
//     filteredHumanwiseAges.length;

//   console.log(avgAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

///////////////////////////////////////

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const arr = ['1', '2', '3', '4', '5'];

// console.log(arr);
// console.log(arr.map(Number));
