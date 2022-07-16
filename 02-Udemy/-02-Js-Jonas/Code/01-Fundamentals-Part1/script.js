/*
let js = "amazing";
console.log(40 + 23 + 8 - 10);
console.log("Mostafa");
console.log(23);

let PI = 3.1415;

let firstName = "Mostafa";
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Freelancer";


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Mostafa");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
year = 2001;
console.log(typeof year);

console.log(typeof null);


let age = 20;
age = 21;

const birthYear = 2001;
// birthYear = 1999; Error

var job = "programmer";
job = "Freelancer";

lastName = "Hamdy";
console.log(lastName); // it's work


const now = 2022;
const ageMostafa = now - 2001;
const ageSarah = now - 2013;
console.log(ageMostafa, ageSarah);

console.log(ageMostafa * 2, ageMostafa / 5, 2 ** 3);
// 2 ** 3 means 2 to the power 3 = 8

const firstName = "Mostafa";
const lastName = "Hamdy";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageMostafa > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;


const now = 2022;
const ageMostafa = now - 2001;
const ageSarah = now - 2013;

console.log(now - 2001 > now - 2013);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMostafa + ageSarah) / 2;
console.log(ageMostafa, ageSarah, averageAge);


const firstName = "Mostafa";
const birthYear = 2001;
const job = "Freelancer";
const year = 2022;

const discription =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(discription);

const discriptionNew = `I'm ${firstName}, a ${
  year - birthYear
} year old ${job}!`;
console.log(discriptionNew);

console.log(`Just a regular string ...`);

console.log(" String with \n multiple \n lines");

console.log(`String with
multiple
lines`);


const age = 2022 - 2005;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  console.log("Sarah is too young. Wait another " + (18 - age) + " years :)");
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) century = 20;
else century = 21;
console.log(century);


// type conversion
const inputYear = "2001";
const numberYear = Number(inputYear);
console.log(numberYear, inputYear);
console.log(numberYear + 19);

console.log(Number("Mostafa"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I'm " + 21 + " years old");
console.log("23" - "10" - 5);
//console.log("23" + "10" + 5); 23105
console.log("23" / "2");

let n = "1" + 1; //11
n--;
console.log(n);

/*
   2 + 3 + 4 + "5" = "95";
   "10" - "4" - "3" - 2 = 1
   "10" - "4" - "3" - 2 + "5" = "15"


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mostafa"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) console.log("Don't spend it all ;)");
else console.log("You should get a job!");

let height;
// OR
height = 0;
if (height) console.log("YAY! Height is defined");
else console.log("Height is UNDEFINED");


const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const year = "2004";
if (year === 2004) console.log("You just became an adult :D (strict)");
if (year == 2004) console.log("You just became an adult :D (loose)");

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);


const hasDriversLicense = true;
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) console.log("Sarah is able to drive!");
else console.log("Someone else should drive ...");


const day = "sunday";

switch (day) {
  case "sunday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "monday":
    console.log("Prepare theory videos");
    break;
  case "tuesday":
    console.log("Write code examples");
    break;
  case "wednesday":
  case "thursday":
    console.log("Record videos");
    break;
  case "friday":
  case "saturday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "sunday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "monday") console.log("Prepare theory videos");
else if (day === "tuesday") console.log("Write code examples");
else if (day === "wednesday" || day === "thursday")
  console.log("Record videos");
else if (day === "friday" || day === "saturday")
  console.log("Enjoy the weekend :D");
else console.log("Not a valid day!");


const age = 21;
age >= 18 ? console.log("You adult") : console.log("You still child");
const state = age >= 18 ? "adult" : "still child";
console.log("You " + state);
*/
