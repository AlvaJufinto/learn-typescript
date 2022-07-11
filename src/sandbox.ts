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
// type Customer = {
//     birthday?: Date,
// }

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() }     
// }

// let customer = getCustomer(1);
// // Optional property access operator
// console.log(customer?.birthday?.getFullYear);

// // Function Basic
// let greet: Function;
// greet = () => {
//     console.log("Hello");
// }

// const add = (a: number, b: number, c: number | string = 10): void => {
//     console.log(a + b);
// }

// add(5, 10, '20');

// const minus = (a: number, b: number): number => {
//     return a + b;
// } 

// let result = minus(10, 7);

// // Type Aliases
// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StringOrNum}

// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid ${uid}`);
// }

// const greet = (user: {name: string, uid: StringOrNum}) => {
//     console.log(`${user.name} says hello`);
// }

// // Function Signature
// // example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }

// // example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if(action === 'add') {
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo; 
//     }
// }

// // example 3 
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = {name: string, age: number};
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} yo`);
    
// }


