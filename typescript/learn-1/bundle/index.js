"use strict";
/*
Run file ts:
- tsc
- tsc && node bundle/index.js
*/
// ================================================= //
// 📌 DATA TYPES
let myName = "John Dae";
let username = 123;
let isAvailable = true;
let isWatching; // 👉 any
let isLearning; // 👉 initial state
let myPet; // 👉 common array
let myPetInfo; // 👉 tuple array
let myFriend;
let isHuman;
// ================================================= //
isWatching = true;
isWatching = 456;
isLearning = 789;
isLearning = false;
isLearning = "Yes";
myPet = ["Whisker", "Paws", "Muffin"];
myPetInfo = ["Paws", 3, true];
myFriend = {
    name: "Jane",
    age: 30,
};
isHuman = "Hana";
// ================================================= //
console.log(myName); // 👉 John Dae
console.log({ username }); // 👉 {username: 123}
console.log({ isAvailable }); // 👉 {isAvailable: true}
console.log({ isWatching }); // 👉 {isWatching: 456}
console.log({ isLearning }); // 👉 {isLearning: 'Yes'}
console.log({ myFriend }); // 👉 {myFriend: {name: 'Jane', age: 30}}
// ================================================= //
// 📌 FUNCTION
function create() {
    return 5;
}
const newCreate = () => {
    return "Hello World";
};
function newNumber() {
    let a = 3;
    let b = 2;
    let sum = a + b;
    console.log("a + b = " + sum);
}
function sum(x, y) {
    const z = x + y;
    console.log("Result: " + z);
}
function newSum(x, y) {
    return x + y;
}
console.log(create()); // 👉 5
console.log(newCreate()); // 👉 Hello World
newNumber(); // 👉 a + b = 6
sum(10, 20); // 👉 Result: 30
console.log(newSum(22, 11)); // 👉 33
function createProcessor(processor) {
    console.log(`
Brand: ${processor.brand}
Base model: ${processor.baseModel}
Model name: ${processor.modelName}
Clock speed: ${processor.clockSpeed}
Turbo boost: ${processor.turboBoost}
Total core: ${processor.totalCore}
  `);
}
function createAMD(processor) {
    console.log(`
Brand: ${processor.brand}
Base model: ${processor.baseModel}
Model name: ${processor.modelName}
Clock speed: ${processor.clockSpeed}
Turbo boost: ${processor.turboBoost}
Precision boost: ${processor.precisionBoost ? processor.precisionBoost : "none"}
Total core: ${processor.totalCore}
  `);
}
const intelCoreI5 = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "i5-11350f",
    clockSpeed: 4,
    turboBoost: false,
    totalCore: 2,
};
const amdRyzen3 = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "r-5570x",
    clockSpeed: 6,
    turboBoost: false,
    precisionBoost: true,
    totalCore: "Dual Core",
};
const amdRyzen1 = {
    brand: "AMD",
    baseModel: "Ryzen 1",
    modelName: "r-5570x",
    clockSpeed: 8,
    turboBoost: false,
    totalCore: "Dual Core",
};
createProcessor(intelCoreI5);
createAMD(amdRyzen3);
createAMD(amdRyzen1);
