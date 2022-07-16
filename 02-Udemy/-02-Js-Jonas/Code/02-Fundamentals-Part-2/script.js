/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");


function logger() {
  console.log("My name is Mostafa");
}

// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = "Juice with " + apples + " apples and " + oranges + " oranges.";
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(2001);

// Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2001);

console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearUnitlRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUnitlRetirement(2001, "Mostafa"));
console.log(yearUnitlRetirement(1970, "Bob"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice =
    "Juice with " +
    applePieces +
    " pieces of apples and " +
    orangePieces +
    " pieces of oranges.";
  return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilReturement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilReturement(2001, "Mostafa"));
console.log(yearsUntilReturement(1950, "Bob"));


const friends = ["Mostafa", "Mohammed", "Omar"];
console.log(friends);

const years = new Array(2001, 2002, 2000);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = "Mostafa";
const mostafa = [firstName, "Hamdy", 2022 - 2001, friends];
console.log(mostafa);


const friends = ["Mostafa", "Mohammed", "Omar"];
// Add last element
const newLength = friends.push("Salem");
console.log(friends);
console.log(newLength);
// Add first element
friends.unshift("Ali");
console.log(friends);
// Remove last element
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);
// Remove first element
friends.shift();
console.log(friends);

console.log(friends.indexOf("Mostafa"));
console.log(friends.includes("Mohammed"));
friends.push(23);
console.log(friends.includes("23"));   false


const mostafa = {
  firstName: "Mostafa",
  lastName: "Hamdy",
  age: 2022 - 2001,
  job: "freelancer",
  friends: ["Mostafa", "Mohammed", "Omar"],
};
console.log(mostafa);
console.log(mostafa.job);
console.log(mostafa["job"]);

const nameKey = "Name";
console.log(mostafa["first" + nameKey]);
console.log(mostafa["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Mostafa? Choose between firstName, lastName, age, job,and friends"
);
if (mostafa[interestedIn]) console.log(mostafa[interestedIn]);
else console.log("Wrong request!");

mostafa.location = "Egypt";
console.log(mostafa);

console.log(
  `${mostafa.firstName} has ${mostafa.friends.length} friends, and his best friend is called ${mostafa.friends[0]}`
);


const mostafa = {
  firstName: "Mostafa",
  lastName: "Hamdy",
  age: 2022 - 2001,
  birthYear: 2001,
  job: "freelancer",
  friends: ["Mostafa", "Mohammed", "Omar"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },
  calcAge: function () {
    console.log(this);
    return 2022 - this.birthYear;
  },

  getSummary: function () {
    return `${mostafa.firstName} is a ${mostafa.calcAge()}-year old ${
      mostafa.job
    }, and he has ${mostafa.hasDriversLicense ? `a` : `no`} driver's license.`;
  },
};
console.log(mostafa.calcAge(2001));
// console.log(mostafa["calcAge"](2001));

console.log(mostafa.getSummary());


for (let rep = 1; rep <= 10; rep++)
  console.log("Lifting weights repetition " + rep + " 🤸‍♂️");


const mostafaArray = [
  "Mostafa",
  "Hamdy",
  2022 - 2001,
  "freelancer",
  ["Mostafa", "Mohammed", "Omar"],
];
const types = [];

for (let i = 0; i < mostafaArray.length; i++) {
  console.log(mostafaArray[i], typeof mostafaArray[i]);

  // types[i] = typeof mostafaArray[i];
  types.push(typeof mostafaArray[i]);
}
console.log(types);

const years = [2001, 2002, 2000];
const ages = [];
for (let j = 0; j < years.length; j++) ages.push(2022 - years[j]);

console.log(ages);

// continue and break
console.log("---ONLY STRINGS---");
for (let i = 0; i < mostafaArray.length; i++) {
  if (typeof mostafaArray[i] !== "string") continue;

  console.log(mostafaArray[i], typeof mostafaArray[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < mostafaArray.length; i++) {
  if (typeof mostafaArray[i] === "number") break;

  console.log(mostafaArray[i], typeof mostafaArray[i]);
}


const mostafaArray = [
  "Mostafa",
  "Hamdy",
  2022 - 2001,
  "freelancer",
  ["Mostafa", "Mohammed", "Omar"],
];

for (let i = mostafaArray.length - 1; i >= 0; i--) console.log(mostafaArray[i]);

for (let exercise = 1; exercise < 4; exercise++) {
  console.log("-------Starting exercise " + exercise);
  for (let rep = 1; rep < 6; rep++)
    console.log(`Exerices ${exercise}: Lifting weight repetition ${rep} 🤸‍♀️`);
}


let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🤸‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

*/
