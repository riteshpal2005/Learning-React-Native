// ==========================================
// TOPIC 1: Arrow Functions & Scope
// ==========================================
// function addTraditional(a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;

// const greet = (name) => console.log(`Hello, ${name}!`);
// // greet(`Ritesh`);

// ==========================================
// TOPIC 2: First-Class Functions & Closures
// ==========================================
// function createCounter() {
//     let count = 0;

//     return () => {
//         count++;
//         return count;
//     }
// };

// // const myCounter = createCounter();
// // console.log(myCounter());
// // console.log(myCounter());

// function createMultiplier(multiplier) {
//     return (x) => {
//         return x * multiplier;
//     }
// };

// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// console.log(double(5));
// console.log(triple(5));

// ==========================================
// TOPIC 3: Dynamic Objects, Destructuring & Spread Operator
// ==========================================
// const user = { name: 'Ritesh', age: 21 };
// user.city = "Bengaluru";

// const { name, city } = user;
// console.log(name);

// const updatedUser = { ...user, age: 20, role: 'Admin' };
// console.log(updatedUser);

// const car = { make: 'BMW', model: 'M5' };
// const newCar = { ...car, year: 2024 };

// const { make, year } = newCar;
// console.log(make, year);

// ==========================================
// TOPIC 4: Asynchronous Event-Driven Architecture (Event Loop)
// ==========================================
// const fetchUserData = async () => {
//     console.log('1. Requesting Data...');

//     await new Promise(resolve => setTimeout(resolve, 2000));

//     console.log('3. Data received!');
// };

// fetchUserData();
// console.log('2. Doing other thingd while we wait...');

// const downloadFile = async () => {
//     console.log('Starting downlaod...');

//     await new Promise(resolve => setTimeout(resolve, 3000));

//     console.log('Download complete!');
// };

// downloadFile();
// console.log('UI is still responsive!');

// ==========================================
// TOPIC 5: TypeScript Structural Typing
// ==========================================
// interface User {
//     name: string;
//     age: number;
// }

// const printUser = (u: User) => console.log(u.name);

// const myDuck = { name: 'Bob', age: 30, city: 'London' };

// printUser(myDuck);

// interface Car {
//     make: string;
//     year: number;
// }

// const printCarMake = (car: Car) => console.log(car.make);

// const myVehicle = { make: 'Ford', year: 2020, color: 'Red' };

// printCarMake(myVehicle);