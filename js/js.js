"use strict";

// let incr = 20,
//     decr = 30;

//     incr++;
//     decr--;

//     console.log(decr);
//     console.log(incr);

// console.log(10%4);

// console.log(6*4 == 24);

// const isChecked = true,
//       isClose = true,
//       isFuck = true;

//       console.log(isChecked && isClose && isFuck);
// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }

// const num = 47;

// if (num > 48) {
//     console.log('error');
// } else if (num < 46) {
//     console.log('error');
// } else if (num !== 46) {
//     console.log('Nooo');
// } else {
//     console.log('OK');
// }

// (num !== 47) ? console.log('ok') : console.log('error');

// const abc = 69;

// switch (abc) {
//     case 68:
//         console.log('No');
//         break;
//     case 70:
//         console.log('No');
//         break;
//     case 64:
//         console.log('Yes');
//         break;
//     default:
//         console.log('Try again');
//         break;
//     }

//     var cheese = 'Cheaddar';
//     var cheese = false;

//     if (cheese) {
//         console.log('Yes!');
//     } else {
//         console.log('No!');
//     }

// const burger = 3;
// const fries = 1;
// const cola = 0;

// console.log(burger === 3 && cola && fries);

// if (burger ===3 && cola && fries) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3);
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 1;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
//     console.log('No');
// }

// let num = 50;

// while (num <= 60) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);
// return result;

// first: for (let i = 0; i < 3; i++) {
//   console.log(`first level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//         if (k === 2) break first;
//       console.log(`third level: ${k}`);
//     }
//   }
// }

// for (i = 5; i <= 10; i++) {
//   console.log(i);
// }

// for (i = 20; i > 10; i--) {
//   if (i == 13) {
//     break;
//   }
//   console.log(i);
// }

// for (i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let j = 2;

// while (j < 16) {
//   j++;
//   if (j % 2 === 0) {
//     continue;
//   } else {
//     console.log(j);
//   }
// }

// const arrayOfNumbers = [];

// for (k = 5; k < 11; k++) {
//   arrayOfNumbers[k - 5] = k;
// }
// console.log(arrayOfNumbers);
// return arrayOfNumbers;

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);
// return result;

// const data = [5, 10, "Shopping", 20, "Homework"];

// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "number") {
//     data[i] = data[i] * 2;
//   } else if (typeof data[i] === "string") {
//     data[i] = `${data[i]} - done`;
//   }
// }
// console.log(data);

// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }
// console.log(result);
// return result;

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += '';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

// let admin;
// let name;

// name = 'John';
// name = admin;
// alert(admin);

// const checkBox = document.querySelector("input");
// const para = document.querySelector("p");
// let shoppingDone = false;

// checkBox.addEventListener("change", () => {
//   checkBox.disabled = true;
//   shoppingDone = true;
//   updateAllowance();
// });

// function updateAllowance() {
//   let childsAllowance;
//   if (shoppingDone === true) {
//     childsAllowance = 10;
//   } else {
//     childsAllowance = 5;
//   }

//   para.textContent = `Child has earned \$${childsAllowance} this week.`;
// }

// updateAllowance();

// const select = document.querySelector('select');
// const para = document.querySelector('p');

// select.onchange = setWeather;

// function setWeather() {
//     const choise = select.value;

//     switch (choise) {
//     case 'sunny':
//         para.textContent = "It's sunny today. Go to the beatch and take ice cream.";
//         break;
//     case 'rainy':
//         para.textContent = 'Rainy outside the window. Take an ambrella or stay home.';
//         break;
//     case 'snowing':
//         para.textContent = 'Snowing and cold. Make a cup of hot tea and relax.';
//         break;
//     case 'overcast':
//         para.textContent = 'A lot of clouds in the sky. Make sure that you take an amrella.';
//         break;
//         default:
//         para.textContent = '';
//     }
// }

// let nick = prompt('What is your name?', '');
// alert(`you are ${nick}.`);
// let num = 20;

// function showFirstMessege(text) {
//   console.log(text);
//   console.log(num);
// }
// showFirstMessege("Hello");
// console.log(num);

// function calc(a, b) {
//     return (a * b);
// }
// console.log(calc(4, 3));

// function ret() {
//     let abc = 33;
//     return abc;
// }

// const dfg = ret();
// console.log(dfg);

// const logger = function () {
//     console.log('Ok');
// };
// logger();

// const calc = (a, b, c) => {
//   return a * b + c;
// };
// console.log(calc(1, 2, 3));

// function calc(a, b) {
//   return a * b;
// }
// console.log(calc(2, 3));

// let a = 3;
// function addTwo(x) {
//   let ret = x + 2;
//   return ret;
// }
// let b = addTwo(a);
// console.log(b);

// let val1 = 2;
// function multiplyThis(n) {
//   let ret = n * val1;
//   return ret;
// }
// let multiplied = multiplyThis(6);
// console.log("example of scope:", multiplied);

// let val = 7;
// function createAdder() {
//   function addNumbers(a, b) {
//     let ret = a + b;
//     return ret;
//   }
//   return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log("example of function returning a function: ", sum);

// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log("example increment", c1, c2, c3);

// let c = 4
// function addX(x) {
//   return function(n) {
//      return n + x
//   }
// }
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)

// function sayHello(name) {
//     return `Hello, ${name}`;
// }
// sayHello('Nick');

// function returnNeighboringNumbers(num) {
//     return arr = [num - 1, num, num + 1];

// }

// returnNeighboringNumbers(10);
// console.log(arr);

// function getMathResult (num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 0; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }
// getMathResult(4, 9);
// console.log(getMathResult(4,9));

// const usdCur = 30;
// const eurCur = 35;
// const discont = 0.9;

// function convert(amount, cur) {
//     return  amount * cur;
// }
// function promo(result) {
//     console.log(result * discont + ' грн.');
// }
// const res = convert(100, usdCur);
// promo(res);

// function test() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 7) return;
//   }
// }
// test();

// const fruit = 'some fruit';
// console.log(fruit.indexOf('w'));

// const logg = '123456789';
// console.log(logg.slice(2));

// const num = 15.4;
// console.log(Math.round(num));

// const str = 'hello';
// console.log(str[str.length - 1]);

// let str = "hello";
// str = 'H' + str.slice(1);
// console.log(str);

// let str = 'i love you, you';
// console.log( str.indexOf('you', 2));

// function ucFirst(str) {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('коля'));

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// console.log(checkSpam('free xxxxx'));

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//        return str.slice(0, maxlength) + '...';
//     }

// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue('!297'));

// function calculateVolumeAndArea(length) {
//   if (
//     typeof length !== "number" ||
//     length < 0 ||
//     Number.isInteger(length) === false
//   ) {
//     console.log("При вычислении произошла ошибка");
//   } else {
//     let volume = length * length * length;
//     let area = 6 * length * length;

//     console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
//   }
// }
// calculateVolumeAndArea(5);

// function getCoupeNumber(num) {
//   if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }
//   if (num === 0 || num > 36) {
//     return "Таких мест в вагоне не существует";
//   }
//   for (let i = 4; i <= 36; i = i + 4) {
//     if (num <= i) {
//       return Math.ceil(i / 4);
//     }
//   }
// }
// console.log(getCoupeNumber(4));

// function getTimeFromMinutes(minTotal) {
//     if (typeof(minTotal) !== 'number' || minTotal < 0 || !Number.isInteger(minTotal)) {
//         return "Ошибка, проверьте данные";
//     }
//     const hours = Math.floor(minTotal / 60);
//     const min = minTotal % 60;
//     let hoursStr = '';
//     let minStr = '';

//     switch (hours) {
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//     switch (min) {
//         case 1:
//             minStr = 'минута';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             minStr = 'минуты';
//             break;
//         default:
//             minStr = 'минут';
//     }
//     return `Это ${hours} ${hoursStr} и ${min} ${minStr}`;
// }
// console.log(getTimeFromMinutes(2562));

// function findMaxNumber(a, b, c, d) {
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number" ||
//     typeof d !== "number"
//   ) {
//     return 0;
//   } else {
//     return Math.max(a, b, c, d);
//   }
// }
// console.log(findMaxNumber(1, 65, 455, "766"));

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return '';
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//         return result;
// }
// console.log(fib(17));

// function learnJS(str, callback) {
//     console.log(`I am learning ${str}.`);
//     callback();
// }
// learnJS('JavaScript', function() {
//     console.log('I am done.');
// });

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function() {
//     console.log('test');
//   }
// };

// // options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(options);

// console.log(Object.keys(options).length);

// console.log(options['colors']['bg']);
// delete options.colors.bg;
// console.log(options);

// let counter = '0';
// for (let qwe in options) {
//   if (typeof options[qwe] === "object") {
//     for (let i in options[qwe]) {
//       console.log(`Свойство ${i} имеет значение ${options[qwe][i]}`);

//     }
//   } else {
//     console.log(`Свойство ${qwe} имеет значение ${options[qwe]}`);
//     counter++;
//   }
// }
// console.log(counter);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: {
//         q: 6,
//         w: 7
//     }
// };
// console.log(Object.keys(obj).length);

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }
// isEmpty(user);
// console.log(isEmpty(user));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//   let sum = 0;

//   for (let key in salaries) {
//     sum += salaries[key];
//   }
//   console.log(sum);

//   let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof(obj[key]) == 'number') {
//             obj[key] *= 2;
//         }
//     }
//   }
//   multiplyNumeric(menu);
//   console.log(menu);

// function User(fullName) {
//     this.fullName = fullName;

//     Object.defineProperties(this, {
//         firstName: {
//             get: function() {
//                 return this.fullName.split(' ')[0];
//             },
//             set: function(newFirstName) {
//                 this.fullName = newFirstName + ' ' + this.lastName;
//             }
//         },
//         lastName: {
//             get: function() {
//                 return this.fullName.split(' ')[1];
//             },
//             set: function(newLastName) {
//                 this.fullName = this.firstName + ' ' + newLastName;
//             }
//         }
//     });
//   }

//   let vasya = new User('Василий Пупкин');
//   vasya.lastName = 'Жопин';
//   console.log(vasya.fullName);

// function makeNegative(num) {
//     if (num <= 0) {
//       return num;
//     } return num = -num;
//   }
//   console.log(makeNegative(16));

// function positiveSum(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         total += arr[i];
//       }
//     }
//     return total;
//   }
//   console.log(positiveSum([2, -8, 56, -2, 4, -7, 3]));

// function countBy(x, n) {
//     let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//     return z;
//   }
//   console.log(countBy(5, 6));

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump/mpg <= fuelLeft;
//   };
//   console.log(zeroFuel(50,25,1));

// function century(year) {
//     return Math.ceil(year / 100);
//   }
//   console.log(century(735));

// function mult(a, b) {
//     return result = a * b;
// }
// console.log(mult(5, 4));

// function digitize(n) {
//     if (typeof(n) === 'number' && n > 0) {
//      return Array.from(String(n), Number).reverse();
//   }
// }
//   console.log(digitize(23588));

// function booleanToString(b){
//     return b.toString();
// }
// console.log(booleanToString(true));

// function even_or_odd(number) {
//   if (number % 2 == 0) {
//     return 'Even';
// } return 'Odd';
// }
// console.log(even_or_odd(243));

// function greet() {
//     return "Hello world";
// }
// console.log(greet());

// const arr = [1, 5, 6, 2, -42];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let val of arr) {
//     console.log(val);
// }

// const str = 'hnst astgt ubu iniu niun';
// const products = str.split(' ');
// console.log(products.join('<>'));

// let obj = {
//     a: 4,
//     b: 2,
// };

// const newNumbers = copy(numbers);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// newNumbers.b = 12;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     q: 5,
//     r: 98
// };

// // console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.q = 6;

// console.log(add);
// console.log(clone);

// const oldArr = ['a', 'g', 'c'];
// const newArr = oldArr.slice();

// newArr[0] = 3;
// console.log(newArr);
// console.log(oldArr);

// const video = ['dfsd', 'dfb', 'wer'],
//         blogs = ['ssgv', 'sgv', 'r34r43'],
//         internet = [...video, ...blogs, 352345];

//         console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [324, 'sdf', 'das'];
// log(...num);

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//     },
//     exp: "1 month",
//   },
//   showAgeAndLangs: function (plan) {
//     const { age } = plan;
//     const { languages } = plan.skills;
//     let str = `Мне ${age} и я владею языками: `;

//     languages.forEach(function (lang) {
//       str += `${lang.toUpperCase()} `;
//     });
//     return str;
//   },
// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//   const { exp } = plan.skills;
//   return exp;
// }
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//   let str = "";
//   const { programmingLangs } = plan.skills;
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//   }
//   return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const asd = [];

// function showFamily(arr) {
//     if (!!arr.length == true) {
//         return `Семья состоит из: ${arr.join(' ')}`;
//     } return 'Семья пуста';
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     console.log(arr.join('\n').toLowerCase());
// }
// standardizeStrings(favoriteCities);

// const someString = 67;

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return 'Ошибка!';
//     }
//     return str.split('').reverse().join('');
// }
// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';

//     arr.length !== 0 ? str = 'Доступные валюты:\n' : str = 'Нет доступных валют';

//     arr.forEach(function(curr) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`
//         }
//     });
//     return str;
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));

// const quarterOf = (month) => {
//     return Math.ceil(month / 4);
//   }
//   console.log(function(11));

//   function quarterOf(month) {
//     return Math.ceil(month / 3);
//   }
//   console.log(quarterOf(3));

// const soldier = {
//     health: 300,
//     armor: 200,
//     weapon: ['m16', 'gun']
// };
// let clone = Object.create(Object.getPrototypeOf(soldier), Object.getOwnPropertyDescriptors(soldier));

// // const John = Object.create(soldier);
// // const John = {
// //     health: 200,
// //     weapon: []
// // }

// // Object.setPrototypeOf(John, soldier);
// console.log(clone);

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50250
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach((item) => {
//         square += item.width * item.length;
//     });
//     volume = square * data.height;
//     if (volume * data.moneyPer1m3 <= data.budget) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }
// console.log(isBudgetEnough(shoppingMallData));

// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
//   'SUNV',
//   'bdt'
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   let a = [],
//     b = [],
//     c = [],
//     rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }
// console.log(sortStudentsByGroups(students));

// function makeCounter() {
//     var currentCount = 1;
//   return function() {
//     return currentCount++;
//   };
// }

// var counter = makeCounter();
// var counter2 = makeCounter();

// console.log( counter() ); 
// console.log( counter2() ); 
// console.log( counter2() );

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return anwser;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }

// transferWaitors(restorantData);
 
// function numberLength(value) {
//     return value.toString().length;
// }


// console.log(numberLength(10342));

// function isAllUpper(text) {
//     if (text.toUpperCase() === text || text.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
    
// }

// console.log(isAllUpper(''));

// function replaceFirst(arr) {
//     console.log(  arr.push(arr.shift())       );   
// }
// replaceFirst([1, 2, 3, 4]);

// function maxDigit(value) {
//    return Math.max(...Array.from(String(value)).map(i => Number(i))) ; 
// }

// console.log(maxDigit(0));

// box.style.backgroundColor = 'green';
// box.style.width = '333px';
// box.style.cssText = 'background-color: black; width: 400px; border-radius: 30%;';

// btns[2].style.borderRadius = '50%';

// hearts.forEach(item => {
//     item.style.backgroundColor = 'green';
// });

// const div = document.createElement('div');
// // const text = document.createTextNode('qwerty');

// div.classList.add('black');

// circles[1].before(div);
// btns[3].remove();
// // btns[1].replaceWith(oneHeart);

// div.innerHTML = '<ul><li>asd</li><li>asd</li><li>asda</li></ul>';

// btns[2].insertAdjacentHTML('afterend', '<a href="https://google.com">dbg</a>');

// function splitPairs(text) {
//     let arr = text.split('');
//     if (arr.length === 0) {
//         return [];
//     } if (arr.length % 2 !== 0) {
//       arr.push('_');
//       return arr.join('').match(/../g);
//     } else {
//         return arr.join('').match(/../g);
//     }
// }
// console.log(splitPairs(''));

// function pow(a, b) {
//     let result = 4;

//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     console.log(result);
// }
// pow(2, 4);

// var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];

// function countSheeps(arrayOfSheep) {
//     let count = 0;
   
//     arrayOfSheep.forEach(item => {
//         if (item == true) 
//         count++;
//     });
//     console.log(count);
//   }
// countSheeps(array1);

// function countSheep(num) {
//     let str = '';
//     for (let i = 1; i <= num; i++) {
//         str += `${i} sheep...`;

//     }
//     console.log(str);
// }
// countSheep(5);

function sumOfDifferences(arr) {
   arr = arr.sort((a, b) => b - a);
   console.log(arr);
    console.log(arr[0] - arr[1]) + (arr[1] - arr[2]);
}
sumOfDifferences([2, 1, 10]);