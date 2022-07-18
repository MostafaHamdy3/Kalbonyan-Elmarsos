"use strict";

/*
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 99) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);


const flight = "LH1234";
const mostafa = {
  name: "Mostafa Hamdy",
  passport: 34368387,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Eng." + passenger.name;

  if (passenger.passport === 34368387) alert("Checked in");
  else alert("Wrong passport!");
};

checkIn(flight, mostafa);
console.log(flight);
console.log(mostafa);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(mostafa);
checkIn(flight, mostafa);


const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transormed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);

const high = function () {
  console.log("👋");
};

document.body.addEventListener("click", high);

["Mostafa", "Omar", "Mohammed"].forEach(high);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Mostafa");
greeterHey("Youssef");

greet("Hello")("Mohammed");

// const greetArrow = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterArrowHey = greetArrow("Hi");
greeterArrowHey("Mostafa");


const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(452, "Mostafa Hamdy");
lufthansa.book(798, "Omar");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 293, "Mary Copper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  booking: [],
};

book.call(swiss, 642, "Mohammed Ali");
console.log(swiss);

// Apply method
const flightData = [435, "Salem"];
// book.apply(swiss, flightData);
book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(111, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Mostafa Hamdy");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 300));
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));


const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log("This will never run again");
})();

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);  ReferenceError
console.log(notPrivate);


// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
*/

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// Example (2)
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log("TIMER");
// }, 1000);
boardPassengers(120, 3);
