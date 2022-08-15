"use strict";

// function hello() {
//     console.log('Hello world');
// }
// hello();

// function hi() {
//     console.log('Hi');
// }
// hi();

// const arr = [1, 14, 4, 30, 54],
//     sorted = arr.sort(compareNum);

//     function compareNum(a, b) {
//         return a - b;
//     }

// console.log(sorted);

// let number = 5; debugger

// function logNumber () {
//     console.log(number);debugger
// }

// number = 6;

// logNumber(); debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter += 1;
//         return counter;
//     }
//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// console.log(0 || NaN || false || null);

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

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// transferWaitors(restorantData);

// function endZeros(value) {
//     let count = 0;
//    value.toString().split('').reverse().forEach((item) => {

//     if (item === '0') {
//         count++;
//     }
//     return count;
//    });
//    console.log(count);
// }

// endZeros(100);

// console.log('45007909000'.match(/[0]*$/)[0].length);

// function removeAllBefore(arr, num) {
//   let i = arr.indexOf(num);

//   if (arr.includes(num) === false) {
//     return arr;
//   } if (arr.length === 0) {
//     return [];
//   } else {
//     return arr.slice(i);
//   }
// }

// console.log(removeAllBefore([10,1,5,6,7,10],5));

// const btn = document.querySelector('button');

// const changeColor = (e) => {
//     if (e.target.style.backgroundColor === 'aqua') {
//         e.target.style.backgroundColor = "green";
//     } else {
//         e.target.style.backgroundColor = 'aqua';
//     }
// };

// btn.addEventListener('click', changeColor,);

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild.firstElementChild);
// console.log(document.querySelector('.second').firstElementChild.firstElementChild);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-tata]'));
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text' || node.nodeName == '#comment') {
//         continue;
//     }
//     console.log(node);
// }

// function pow(a, b) {
//     let result = 1;

//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// function pow(a, b) {
//     if (b === 1) {
//         return a;
//     } else {
//     return a * pow(a, b - 1) ;
//     }
// }

// console.log(pow(2, 4));
// // console.log(pow(4, 3));

// let students = {
//   js: [
//     {
//       name: "John",
//       progress: 100,
//     },
//     {
//       name: "Ivan",
//       progress: 60,
//     },
//   ],

//   html: {
//     basic: [
//       {
//         name: "Pet",
//         progress: 20,
//       },
//       {
//         name: "Ann",
//         progress: 18,
//       },
//     ],
//     pro: [
//       {
//         name: "Sam",
//         progress: 10,
//       },
//     ],
//     semi: {
//         students: [
//             {
//             name: 'Test',
//             progress: 100
//             }
//         ]
//     }
//   },
// };

// for (let items in students) {
//     console.log(students[items]);
// }

// console.log(Object.values(students));
// // function getTotalProgressByIteration(data) {
// //   let total = 0;
// //   let students = 0;

// //   for (let course of Object.values(data)) {
// //     if (Array.isArray(course)) {
// //       students += course.length;

// //       for (let i = 0; i < course.length; i++) {
// //         total += course[i].progress;
// //       }
// //     } else {
// //       for (let subCourse of Object.values(course)) {
// //         students += subCourse.length;

// //         for (let i = 0; i < subCourse.length; i++) {
// //           total += subCourse[i].progress;
// //         }
// //       }
// //     }
// //   }

// //   return total / students;
// // }

// // console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//           total += data[i].progress;
//         }
//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students)[0] / getTotalProgressByRecursion(students)[1];

// console.log(result);

// function factorial(n) {
//     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//         return "Error";
//     } if (n < 0 || n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }

// }

//     // return typeof(n) !== 'number' || !Number.isInteger(n) ? "Error" ? n < 0 || n === 0 : n * factorial(n - 1)

// console.log(factorial(5));

// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 600
//     }],

//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],

//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };

//   function salary(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].salary;
//         }
//         return total;
//     } else {
//         let total = 0;
//         for (let subData of Object.values(data)) {
//             total += salary(subData);
//         }
//         return total;
//     }
//   }

//   console.log(salary(company));

//   function sumTo(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
//     // result = 0;
//     // for (i = 1; i <= n; i++) {
//     //     result += i;
//     // }
//     // return result;
//   }
// //   console.log(sumTo(100));

// //   function fib(n) {
// //     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// //   }
// //   console.log(fib(45));

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//   function printList(list) {
//     console.log(list.value);
//      if (list.next) {
//         printList(list.next);
//     }
//   }
// printList(list);

// function beginningZeros(text) {
//   let count = 0;
//   let arr = text.split("");
//   for (let i = 0; i <= arr.length; i++) {
//     if (Number(arr[i]) === 0) {
//       count++;
//     } else {
//       return count;
//     }
//   }

// }
// console.log(beginningZeros("00100"));

// mobile event
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener('DOMContentLoaded', () => {

//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//        console.log('g'); 
//     //    console.log(e.touches);
//        console.log(e.targetTouches);
//     });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    //     console.log('move'); 
    //  });

    //  box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('end'); 
    //  });

//     const p = document.querySelectorAll('p');
//     console.log(p);
    
// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;   
//     script.async= false; 
//     document.body.prepend(script);
// }
// loadScript('js/js.js');
// loadScript('js/main.js');

function sumOfDifferences(arr) {
    arr = arr.sort((a, b) => b - a);
    console.log(arr);
     console.log(arr[0] - arr[1]) + (arr[1] - arr[2]);
 }
 sumOfDifferences([2, 1, 10]);

