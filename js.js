"use strict";

// const checkBox = document.querySelector('input');
// const para = document.querySelector('p');
// let shoppingDone = false;

// checkBox.addEventListener('change', () => {
//     checkBox.disabled = true;
//     shoppingDone = true;
//     updateAllowance();
// });

// function updateAllowance() {
//     let childsAllowance;
//     if (shoppingDone === true) {
//         childsAllowance = 10;
//     } else {
//         childsAllowance = 5;
//     }

//     para.textContent = `Child has earned \$${childsAllowance} this week.`;
//     }

//     updateAllowance();

const checkBox = document.querySelector("input");
const para = document.querySelector("p");
let shoppingDone = false;

checkBox.addEventListener("change", () => {
  checkBox.disabled = true;
  shoppingDone = true;
  updateAllowance();
});

function updateAllowance() {
  let childsAllowance;
  if (shoppingDone === true) {
    childsAllowance = 10;
  } else {
    childsAllowance = 5;
  }

  para.textContent = `Child has earned \$${childsAllowance} this week.`;
}

updateAllowance();
