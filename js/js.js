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

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }

    let result = '';
    let first = 0;
    let second = 1;
    

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
        return result;
}
console.log(fib(17));