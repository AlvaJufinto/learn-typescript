"use strict";
// const anchor = document.querySelector('a');
// if(anchor) {
//     console.log(anchor.href);
// } else {
// }
// const form = document.querySelector('form');
// Type casting, changing it from element to HTMLElement
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
