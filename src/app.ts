// const anchor = document.querySelector('a');

// if(anchor) {
//     console.log(anchor.href);
// } else {

// }

// const form = document.querySelector('form');
// Type casting, changing it from element to HTMLElement
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
}); 

