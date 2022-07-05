// // Interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'John',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log("I spent", amount);
//         return amount;
//     },
// };

// const greetPerson = (person: IsPerson) => {
//     console.log("Hello", person.name);
// }

// greetPerson(me);

// let someone: IsPerson;

// console.log(me);

import { Invoice } from './classes/invoice';
import { Payment } from './classes/payment';
import { HasFormatter } from './interfaces/HasFormatter';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'Plumbing Work', 200);

let docs: HasFormatter[] = []
docs.push(docOne);
docs.push(docTwo);


// const invOne = new Invoice(`mario`, 'work on the mario website', 250);
// const invTwo = new Invoice(`luigi`, 'work on the mario website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()));


// Type casting, changing it from element to HTMLElement
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter; 
    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    
    console.log(doc);
}); 

