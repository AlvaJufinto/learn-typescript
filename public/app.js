const me = {
    name: 'John',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
let someone;
console.log(me);
import { Invoice } from './classes/invoice';
const invOne = new Invoice(`mario`, 'work on the mario website', 250);
const invTwo = new Invoice(`luigi`, 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()));
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
