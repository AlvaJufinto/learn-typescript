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
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter';


// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'Plumbing Work', 200);

// let docs: HasFormatter[] = []
// docs.push(docOne);
// docs.push(docTwo);


// const invOne = new Invoice(`mario`, 'work on the mario website', 250);
// const invTwo = new Invoice(`luigi`, 'work on the mario website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()));

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Type casting, changing it from element to HTMLElement
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter; 
    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values)
    }
    
    list.render(doc, type.value, 'end')
    console.log(doc);
}); 

// EXTRA FEATURE
// GENERICS 

// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let docOne = addUID({ name: 'yoshi', age: 40 })
// // let docTwo = addUID('hello');

// // with interfaces 
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }

// const docThree: Resource<object> = {
//     uid: 23421,
//     resourceName: 'person',
//     data: {
//         name: 'shaun'
//     },
// }

// const docFour: Resource<string[]> = {
//     uid: 223331,
//     resourceName: 'shoppingList',
//     data: ['test', 'milk', 'toilet roll'];
// }

// generic and ENUMS
enum ResourceType { 
    BOOK, 
    AUTHOR, 
    FILM, 
    DIRECTOR, 
    PERSON 
}

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 21212,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' },
} 

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: 'Yoshi' }
}

// // TUPLES 
// let arr = ['ryu', 25, true];
// arr[0] = false;

// let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = 'ken';
// tup[1] = 30;

// let students: [string, number];

// students = ['chun-li', 232323]