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