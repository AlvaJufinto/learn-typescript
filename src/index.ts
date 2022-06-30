// // ========= TYPE CHECKING =============
// let sales: number = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;
// let level;
// // dont use type 'any' in ts, seems like type checking is just useless

// function render(document) {
//     console.log(document);
// }

// // because this array contains numbers only, ts is going to auto set is as number[]  
// let numbers = [1, 2, 3];
// let numbers: number[] = [];

// // ============ TUPLES ============
// // Array with different data types 
// // Tuples only useful with fixed pair of value
// // 1, 'Alva'
// let user: [number, string, boolean, number] = [1, 'Alva', true, 0];
// user.push(1);
// // The only gap in typescript tuple ^^


// // ======= ENUMS ========
// // sort of variables with fixed key n value
// // PascalCase;
// // Define enum with const to generate more optimized code
// const enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);


// // ================= Functions =================
// // Add optional params with '?'
// // Or maybe add default value with '='
// function calculateTax(income: number, taxYear = 2022): number {
//     if(taxYear < 2022) {
//         return income * 1.2;
//     }
//     return income * 1.3;
// }

// // Js doesnt care about argument, but ts cares
// calculateTax(10_000)


// // ========== Objects ===========
// // to make value of the key fixed = 'readonly'
// // (Type Aliases)
// // DRY principle
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = { 
//     id: 1, 
//     name: 'Alva',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// };

// // ========== Union Types ===========
// function kgToLbs(weight : number | string): number {
//     // Narrowing
//     if(typeof weight === 'number') {
//         return weight * 2.2
//     } else {
//         return parseInt(weight) * 2.2
//     }
// }

// kgToLbs(10);
// kgToLbs('10kg');

// // ========== Intersections types ==========
// type Draggable = {
//     drag: () => void,
// }

// type Resizeable = {
//     resize: () => void,
// }

// type UIWidget = Draggable & Resizeable;
// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {},
// }

// // ======== Literal Types =====
// Literal (exact, spesific)
// type Quantity = 50 | 100
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';


// // Nullable Types
// function greet(name: string | null | undefined) {
//     if(name) {
//         console.log(name.toUpperCase());
//     } else {
//         console.log("Hola!");
//     }
// }

// greet(null);

// // Optional Chaining
type Customer = {
    birthday?: Date,
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }     
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear);

// Optional element access operator
// customers?.[0]

// Optional call operator
// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.('a')