'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
//Rest Pattern
const sum = function (...inputs) {
  let sum = 0;
  inputs.forEach(element => (sum += element));

  return sum;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
*/

/*
//Spread Operator (...)
const arr = [1, 2, 3];
const badNewArr = [arr[0], arr[1], arr[2], 4, 5];
const newArr = [...arr, 4, 5];

console.log(...badNewArr);
console.log(...newArr);
*/

/*
//Destructing Object
const { name: restaurantName, location: loc, categories: tags } = restaurant;
console.log(restaurantName, loc, tags);

//Mutating variables
let a = 222;
let b = 333;

const obj = { a: 6, b: 8, c: 10 };

//You need to wrap this statement in paranthesises otherwise compiler compile it as a code block
({ a, b } = obj);

console.log(a, b);

//Nested Obj
const {
  openingHours: {
    thu,
    fri: { open, close },
  },
} = restaurant;
console.log(thu);
console.log(open, close);
*/

/*
const array = [3, 4, 5];

//Destructing Array
const [x, y, z] = array;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Switching values by destructing
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starterCourse, mainCourse] = restaurant.order(2, 1);
console.log(starterCourse, mainCourse);

const nested = [4, 5, [6, 7]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/
