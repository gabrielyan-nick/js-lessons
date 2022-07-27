'use strict';

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

let num = 50;

while (num <= 60) {
    console.log(num);
    num++;
}


for (let i = 1; i <= 100; i++ ) {
    if (i % 17 == 0) {
        console.log( i );
    }
}