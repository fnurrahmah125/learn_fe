/* 
Run file ts:
- tsc
- tsc && node bundle/index.js
*/

// ================================================= //

// 📌 DATA TYPES
let myName: string = "John Dae";
let username: number = 123;
let isAvailable: boolean = true;
let isWatching; // 👉 any
let isLearning: number | string | boolean; // 👉 initial state
let myPet: string[]; // 👉 common array
let myPetInfo: [string, number, boolean]; // 👉 tuple array

// 👇 custom type
type FriendType = {
  name: string;
  age: number;
  isWorking?: boolean;
};

let myFriend: FriendType;

// 👇 union type
type woman = string;
type man = boolean;
type gender = woman | man; // 👉 string | boolean

let isHuman: gender;

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
function create(): number {
  return 5;
}

const newCreate = (): string => {
  return "Hello World";
};

function newNumber(): void {
  let a = 3;
  let b = 2;
  let sum = a + b;
  console.log("a + b = " + sum);
}

function sum(x: number, y: number): void {
  const z: number = x + y;
  console.log("Result: " + z);
}

function newSum(x: number, y: number): number {
  return x + y;
}

console.log(create()); // 👉 5
console.log(newCreate()); // 👉 Hello World
newNumber(); // 👉 a + b = 6
sum(10, 20); // 👉 Result: 30
console.log(newSum(22, 11)); // 👉 33

// ================================================= //

// 📌 INTERFACE
type CoreCount = 2 | 4 | 8 | 12;
type CoreName = "Dual Core" | "Quad Core";

// type Core = 2 | 4 | 8 | 12 | "Dual Core" | "Quad Core";
type Core = CoreCount | CoreName;

interface Processor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
  // totalCore: 2 | 4 | 8 | 12 | "dual core" | "quad core";
  totalCore: Core;
}

interface Processor {
  turboBoost: boolean;
}

interface Intel extends Processor {
  precisionBoost: boolean;
}

interface Pentium extends Intel {
  // add new property here
}

interface AMD extends Processor {
  precisionBoost?: boolean;
}

function createProcessor(processor: Processor): void {
  console.log(`
Brand: ${processor.brand}
Base model: ${processor.baseModel}
Model name: ${processor.modelName}
Clock speed: ${processor.clockSpeed}
Turbo boost: ${processor.turboBoost}
Total core: ${processor.totalCore}
  `);
}

function createAMD(processor: AMD): void {
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

const intelCoreI5: Processor = {
  brand: "Intel",
  baseModel: "Core i5",
  modelName: "i5-11350f",
  clockSpeed: 4,
  turboBoost: false,
  totalCore: 2,
};

const amdRyzen3: AMD = {
  brand: "AMD",
  baseModel: "Ryzen 3",
  modelName: "r-5570x",
  clockSpeed: 6,
  turboBoost: false,
  precisionBoost: true,
  totalCore: "Dual Core",
};

const amdRyzen1: AMD = {
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
