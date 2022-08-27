// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;
let userName: string;
userName = "Mostafa";
let isInstructor: boolean;
isInstructor = false;

// More complex types
let hobbies: string[];
// We can use number or boolean instead of string
hobbies = ["Sports", "Foot"];
let person;
// or -> let person: any; ||
person = {
  name: "Mostafa",
  age: 21,
};

type Person = {
  name: string;
  age: number;
};
let someone: Person;
someone = {
  name: "Omar",
  age: 22,
};
// Error
// someone = {
//    isEmployee: false,
// }

let people: Person[];

let course = "React - The Complete Guide";
// course will take by default string type so when assign a number to it, we will get an error

// we can do ...
let subject: string | number = "Programming";
subject = 4;

// Functions & types
function add(a: number, b: number) {
  return a + b;
}
function print(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [2, 3, 4];
const updatedArray = insertAtBeginning(demoArray, 1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
