"use strict";

// alert('wtf');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('How old are you?', '');
// console.log(answer + 10);

// const answers = [];

// // answers[0] = prompt('What is your name?', '');
// // answers[1] = prompt('What is your surname?', '');
// // answers[2] = prompt('How old are you?', '');

// console.log(typeof(answers));

// const user = 'Nick';
// alert(`Hello, ${user}`);

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

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += '';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);



let admin;
let name;

name = 'John';
name = admin;
alert(admin);