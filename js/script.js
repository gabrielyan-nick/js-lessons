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

// function drawStairs(n) {
//     let stairs = `I\n`.repeat(n);
//     // for (let i = 1; i <= n; i++) {
//     //     stairs += `I\n`;
//     // }
//     console.log(stairs);
// }
// drawStairs(10);

// function areaOrPer(l , w) {
//     return l == w ? l * w : l * 2 + w * 2;
//   }
//   areaOrPer(10, 10);

// function amountOfPages(summary){
//     let result = '';
//     let n = 0;

//     for (let i = 1; i <= summary; i++) {
//       result += i;
//       if (result.length === summary) {
//         n = i;
//         break;
//       }
//     }

//     return n;
//   }
//   console.log(amountOfPages(25));

// function isPangram(string) {
//     console.log(string.split('').includes('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'));
//  }
//  isPangram('The quick brown fox jumps over the lazy dog');

// function deepCount(a){
//     let count = a.length;
//     for (let i = 0; i < a.length; i++) {
//         if(Array.isArray(a[i])) {
//             count += deepCount(a[i]);
//         }
//     }
//     return count;
// }
// console.log(deepCount([1, 2, [3, 4, [5]]]));

// const box = document.querySelector('.box');
// const btn = document.querySelector('.btn');
// let changeColor,
//     i = 0;

// function qwerty() {
//     if (i === 1) {
//         clearInterval(changeColor);
//     }
//     if (!q.classList.contains('red_box')) {
//         q.classList.add('red_box');
//     } else {
//         q.classList.remove('red_box');
//     }
//     i++;
// }

// setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 500);
// }, 500);

// btn.addEventListener('click', () =>{
//     if (!box.classList.contains('box2')) {
//         box.classList.add('box2');
//     } else {
//         box.classList.remove('box2');
//     }
// });

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             box.style.top = pos + 'px';
//             box.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// const now = new Date();

// console.log(now.setHours(30));
// console.log(now);

// let start = new Date ();

// for (let i = 0; i < 1000000000; i++) {
//     let some = i ** 2;
// }

// let end = new Date();

// console.log(`Цикл отработал ${end - start} миллисекунд`);

// const date = new Date();

// function getWeekDay(d) {
//     d.setFullYear(2022, 7, 27);
//     return d.getDay() == 0 ? 7 : d.getDay();
// }

// console.log(getWeekDay(date));

// const now = new Date();

// function getSecondsToday() {
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     let diff = now - today;
//     return Math.round(diff / 1000);
// }

// console.log(getSecondsToday());

// function formatDate(date) {
//     let diff = new Date() - date;

//     if (diff < 1000) {
//         return "прямо сейчас";
//     }
//     let sec = Math.floor(diff / 1000);

//     if (sec < 60) {
//         return `${sec} сек. назад`;
//     }
//     let min = Math.floor(diff / 60000);

//     if (min < 60) {
//         return `${min} мин. назад`;
//     }

//     let d = date;
//     d = [
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ].map(item => item.slice(-2));

//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');

// }
// console.log(formatDate(new Date(new Date - 1001)));

// function multipleOfIndex(array) {
//    let newArr = array.filter((item, i) => {
//           return Number.isInteger(item / i);
//       });
//       console.log(newArr);
//   }

//   multipleOfIndex([22, -6, 32, 82, 9, 25]);

// function magNumber(info) {
//   const weapons = {
//     'PT92': 17,
//     'M4A1': 30 ,
//     'M16A2': 30,
//     'PSG1': 5
//   };

//   let bullets = info[1] * 3;

//   return Math.ceil(bullets / weapons[info[0]]);

// }
// console.log(magNumber(["PT92", 6]));

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   this.style.backgroundColor = 'green';
//   console.log(this);
// });

// const obj = {
//     num: 5,
//     sayNamber: function() {
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNamber();

// const double = a => a * 2;

// console.log(double(5));

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         console.log(this.height * this.width);
//     }
//     calcPerimeter() {
//         console.log(this.height * 2 + this.width * 2);
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`text: ${this.text}, color: ${this.bgColor}`);
//     }
// }

// const square = new Rectangle(5, 5);
// const rectangle = new Rectangle(10, 5);
// const greenRect = new ColoredRectangleWithText(4, 9, 'qwerty', 'green');

// // console.log(square);
// // square.calcArea();
// // rectangle.calcPerimeter();
// greenRect.showMyProps();
// greenRect.calcPerimeter();

// function sumArrgs() {
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
// console.log(sumArrgs(4, 5, 6));

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// };

// log('asd', 'qwe', 'dqw', 'ew', 'rtwet');

// let someObj = {
//     a: 2,
//   };

//   let obj = Object.create(someObj, {
//     b: {
//       value: 2,
//     },
//     c: {
//       value: 3,
//       enumerable: true,
//     },
//   });

//   let objCopy = Object.assign({}, obj);
//   console.log(objCopy);

// function nthEven(n){
//     let arr = [];
//    for (let i = 0; i <= (n - 1) * 2; i++) {

//     arr[i] = i;

//    }
//    return arr.pop();
//   }
//   console.log(nthEven(100));

// console.log("Запрос дынных");

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данных");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };
//     resolve(product);
//   }, 2000);
// });

// req.then((product) => {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = "order";
//       resolve(product);
//     }, 2000);
//   });
// }).then(data => {
//     data.modify = true;
//     return data;
//   }).then(data => {
//     console.log(data);
//   }).catch(() => {
//     console.error('Error');
//   }).finally(() => {
//     console.log('Finally');
//   });


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//     }
    
//   delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

// const names = ['Ivan', 'Nick', 'Ksenia', 'Voldemar'];

// const shortNames = names.filter(i => {
//     return i.length < 5;
// });

// console.log(shortNames);

// const answers = ['IvaN', 'ANnA', 'nicK'];

// const res = answers.map(i => i.toLowerCase());

// console.log(res);
// console.log(answers);

// const some = ['4', 'efw', 'ew'];

// console.log(some.every(i => typeof(i) === 'string'));

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, item) => `${sum}, ${item}`, 'ok');

// console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const arr = Object.entries(obj)
// .filter(i => i[1] === 'persone')
// .map(i => i[0]);

// console.log(arr);

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function setFilmsIds(arr) {
//      arr.map((item, i) => {
//         item.id = i;
//     });
//     return films;
// }

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//    return arr.every(item => item.id || item.id === 0);
// }
// console.log(checkFilms(tranformedArray));

// const funds = [
//     {amount: 1400},
//     {amount: 2400},
//     {amount: 1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: 11400}
// ];

// const getPositiveIncomeAmount = (data) => {

//   return data.filter(item => item.amount > 0).reduce((sum, item) => sum + item.amount, 0);
// };

// const getTotalIncomeAmount = (data) => {

//     return data.some(item => item.amount < 0) ? data.reduce((sum, item) => sum + item.amount, 0) : getPositiveIncomeAmount(data); 
//     };

// console.log(getTotalIncomeAmount(funds));

