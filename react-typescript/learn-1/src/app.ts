// 👉 VARIABLE
let variable = "hello";
variable = "hi";

let age = 18;
age = 23;

let ageWithType: number;
ageWithType = 25;
ageWithType = 30;

const testString: string = "Hello";
const testBoolean: boolean = true;

let testStringOrNumber: string | number;
testStringOrNumber = "Hi";
testStringOrNumber = 20;

// 👉 ARRAY
const names = ["john", "jane", "tom"];
names.push("mike");

const testStringArray: string[] = ["one", "two", "three"];
const testNumberArray: number[] = [1, 2, 3, 4, 5];
const testStringOrNumberArray: (string | number)[] = ["one", 2, "three", 4];

// 👉 OBJECT
const user = {
  username: "john",
  age: 22,
  isAdmin: false,
};

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "john",
  age: 23,
  isAdmin: true,
};

userObj = {
  username: "jane",
  age: 26,
  isAdmin: false,
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "john",
  age: 23,
  isAdmin: false,
  //   phone:"+1234567"
};

userObj2 = {
  username: "john",
  age: 23,
  isAdmin: true,
  phone: "+1234567",
};

// 👉 ANY
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testAny: any[] = [1, "two", false, [1, 2, 3]];

// 👉 FUNCTIONS
const returnString = (): string => {
  return "developer";
};

const multiple1 = (num: number) => {
  return num * 2;
};

const multiple2 = (num: number): number => {
  // MUST RETURN A NUMBER
  return num * 3;
};

const multiple3 = (num: number): void => {
  // DONT RETURN
  console.log(num * 4);
};

const sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

// 👉 TYPE ALIASES
type UserType = {
  username: string;
  age: number;
  phone?: string;
};
const betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;
const write: myFunc = (num, str) => {
  console.log(num + " times " + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "john",
  age: 43,
  theme: "dark",
};

// 👉 INTERFACES
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
  employeeId: 1,
};

const client: IUser = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
};

// 👉 GENERICS
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe1: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str1", "str2"],
};

const testMe2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "John" }],
};

const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "Fruit" }],
};

console.info(variable);
console.info(age);
console.info(ageWithType);
console.info(testString);
console.info(testBoolean);
console.info(testStringOrNumber);
console.info(testStringArray);
console.info(testNumberArray);
console.info(testStringOrNumberArray);
console.info(user);
console.info(userObj);
console.info(userObj2);
console.info(testAny);
console.info(returnString());
console.info(multiple1(2));
console.info(multiple2(3));
console.info(multiple3(4));
console.info(sum(4, 3));
console.info(betterFunc({ username: "Jane", age: 28 }));
console.info(write(5, "hello"));
console.info(userWithTheme);
console.info(emp);
console.info(client);
console.info(testMe1);
console.info(testMe2);
console.info(testMe3);
