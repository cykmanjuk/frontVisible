// VARIABLES ----------------------------------

// var name = 'studio54';
// const lastName = 'verstun';
// let age = 32;
// const isProgrammer = true;
// const withNum5 = '5';

// Мутирование --------------------------------

//console.log('Имя человека: ' + name + ', а возраст человека: ' + age);
//alert('Имя человека: ' + name + ', а возраст человека: ' + age);

// const secondName = prompt('Введите фамилию');
// alert(name + ' ' + secondName);


// ОПЕРАТОРЫ ---------------------------------

// let currentYear = 2020;
// const birthYear = 1988;

// const age = currentYear - birthYear;
// console.log(age);

// const a = 10;
// const b = 5;
// let c = 32;

//c = c + a;
// c += a;
// c -= a;
// c *= a;
// c /= a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(++currentYear);
// console.log(currentYear++);
// console.log(currentYear);
// console.log(c);


// ТИПЫ ДАННЫХ ----------------------------------

// const isProgrammer = true;
// const name = 'Studio';
// const age = 32;
// let x;

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(x);
// console.log(typeof null);
// console.log(null);


// ПРИОРИТЕТ ОПЕРАТОРОВ ---------------------------

// const fullAge = 32;
// const birthYear = 1988;
// const currentYear= 2020;

// const isFullAge = currentYear - birthYear >= fullAge;

// console.log(isFullAge);


// УСЛОВНЫЕ ОПЕРАТОРЫ -----------------------------

// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('Курс уже готов');
// } else if (courseStatus === 'pending') {
//   console.log('Курс в разработке');
// } else {
//   console.log('Курс не получился');
// }

// const isReady = true;

// if (isReady = true) {
//   console.log('Все готово');
// }

// if (isReady) {
//   console.log('Все готово');
// } else {
//   console.log('Все НЕ готово');
// }

// isReady ? console.log('Все готово') : console.log('Все НЕ готово');

// const num1 = 42;
// const num2 = '42';

// console.log(num1 == num2);
// console.log(num1 === num2);


// Булевая Логика -------------------------------------------

// ФУНКЦИИ -------------------------------------------

// function calculateAge(year) {
//   return 2020 - year;
// }
// console.log(calculateAge(1988));
// console.log(calculateAge(1917));

// const myAge = calculateAge(1988);
// console.log(myAge);

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);

//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас в возрасте ' + age + ' лет');
//   } else {
//     console.log('Вообще то это уже будущее');
//   }
 
// }

// logInfoAbout('Mihail', 1985);
// logInfoAbout('Mihail', 2222);


// МАССИВЫ --------------------------------------------------

//  const cars = ['мазда', 'мерседес', 'форд']; // так лучше 
// //const cars = new Array('мазда', 'мерседес', 'форд');
// console.log(cars);
// console.log(cars.length);
// console.log(cars[1]);
// console.log(cars[0]);
// console.log(cars[3]);

// cars[0] = 'Porshe';
// console.log(cars);
// //cars[3] = 'mazda';
// cars[cars.length] = 'mazda';
// console.log(cars);


// ЦЫКЛЫ ---------------------------------------------------

// const cars = ['мазда', 'мерседес', 'форд', 'Porshe']; 


// for( let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   console.log(car);
// }

// for (let car of cars) {
//   console.log(car);
// }


// ОБЪЕКТЫ  ----------------------------------------------

const person = {
  firstName : 'Михаил',
  lastName : 'Studio54',
  year : 1988,
  languages : ['Ru', 'En', 'De'],
  hasWife : false,
  greet : function() {
    console.log('greet from person')
  }
}
console.log(person.firstName);
console.log(person['lastName']);
const key = 'languages';
console.log(person[key]);
person.hasWife = true;
person.greet();
console.log(person);