'use strict';

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