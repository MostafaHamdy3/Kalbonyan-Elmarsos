"use strict";

/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}!`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2999) {
      var millennial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Omar";

      // Reassigning outer scope's variable
      output = "NEW OUTPUT!";
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);
    }
    // NOT error because I used var it define in all function
    console.log(millennial);
    console.log(output);
  }

  printAge();
  return age;
}

let firstName = "Mostafa";
calcAge(2001);


// Variable
console.log(me); //undefined
// console.log(job);    ReferenceError
// console.log(year);   ReferenceError

var me = "Mostafa";
let job = "freelancer";
const year = 2001;

// Function
console.log(addDecl(2, 3)); //It's work

// ReferenceError
// console.log(addExpr(2, 3));
// addArrow isn't a function
// console.log(addArrow(2, 3));
console.log(addArrow); //undefined

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(2001);

const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(2000);

const mostafa = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
mostafa.calcAge();

const omar = {
  year: 2000,
};

omar.calcAge = mostafa.calcAge;
omar.calcAge();


var firstName = "Omar";

const mostafa = {
  firstName: "Mostafa",
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // Solution (1)
    //  const self = this;
    //  const isOmar = function () {
    //    console.log(self);
    //    console.log(self.year >= 2000 && self.year <= 2003);
    //  };
    //  isOmar();

    // Solution (2)
    const isOmar = () => {
      console.log(this);
      console.log(this.year >= 2000 && this.year <= 2003);
    };
    isOmar();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

mostafa.greet();
console.log(this.firstName);
mostafa.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 21;
let oldAge = age;
age = 22;
console.log(oldAge);
oldAge = 20;
console.log(age);
console.log(oldAge);

const me = {
  name: "Mostafa",
  age: 21,
};
const friend = me;
friend.age = 24;

console.log("Friend", friend);
console.log("Me", me);

me.age = 28;
console.log("Friend", friend);
console.log("Me", me);
*/

// Primitive types
let lastName = "Hamdy";
let oldLastName = lastName;
lastName = "Hassan";
console.log(oldLastName, lastName);

// Reference types
const bob = {
  firstName: "Bob",
  lastName: "Williams",
  age: 27,
};
const marriedBob = bob;
marriedBob.lastName = "Davis";
console.log("Before marriage", bob);
console.log("After marriage", marriedBob);

// Copying objects
const bob2 = {
  firstName: "Bob",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Jessica"],
};

const bobCopy = Object.assign({}, bob2);
bobCopy.lastName = "Davis";

bobCopy.family.push("Mary");
bobCopy.family.push("John");

console.log("Before marriage:", bob2);
console.log("After marriage:", bobCopy);
