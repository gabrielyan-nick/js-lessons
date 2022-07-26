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
if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('error');
}

const num = 47;

if (num > 48) {
    console.log('error');
} else if (num < 46) {
    console.log('error');
} else if (num !== 46) {
    console.log('Nooo');
} else {
    console.log('OK');
}

(num !== 47) ? console.log('ok') : console.log('error');


const abc = 69;

switch (abc) {
    case 68:
        console.log('No');
        break;
    case 70:
        console.log('No');
        break;
    case 64:
        console.log('Yes');
        break;
    default:
        console.log('Try again');
        break;
    }