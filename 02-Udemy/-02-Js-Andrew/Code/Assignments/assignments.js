/*
///////////////////////////////////
// LECTURE: Values and Variables //
///////////////////////////////////
let country = "Egypt";
let continent = "Africa";
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

//////////////////////////
// LECTURE: Data Types //
/////////////////////////
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/////////////////////////////////
// LECTURE: let, const and var //
/////////////////////////////////
language = "Arabic";
const name = "Mostafa Hamdy";
// name = "Mohammed Hamdy";   Error

//////////////////////////////
// LECTURE: Basic Operators //
//////////////////////////////
const halfCountry = population / 2;
console.log(halfCountry);
population++;
console.log(population);
let finland = 6;
console.log(population > finland);
let average = 33;
console.log(population < average);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

/////////////////////////////////////////////
// LECTURE:  Strings and Template Literals //
/////////////////////////////////////////////
description = `${country} is in ${continent} , and its ${population} million people speak ${language}`;
console.log(description);

/////////////////////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements //
/////////////////////////////////////////////////////
if (population > average)
  console.log(country + "'s population is above average");
else
  console.log(
    country +
      "'s population is " +
      (average - population) +
      " million below average"
  );
population = 13;
if (population > average)
  console.log(country + "'s population is above average");
else
  console.log(
    country +
      "'s population is " +
      (average - population) +
      " million below average"
  );
population = 130;
if (population > average)
  console.log(country + "'s population is above average");
else
  console.log(
    country +
      "'s population is " +
      (average - population) +
      " million below average"
  );
population = 1;

///////////////////////////////////////////
// LECTURE: Type Conversion and Coercion //
///////////////////////////////////////////
console.log("9" - "5");
//4 -> right
console.log("19" - "13" + "17");
//23 -> No it's 617
console.log("19" - "13" + 17);
//23 -> right
console.log("123" < 57);
//false -> right
console.log(5 + 6 + "4" + 9 - 4 - 2);
//18 -> no it's 1143


/////////////////////////////////////////////
// LECTURE: Equality Operators: == vs. === //
/////////////////////////////////////////////
let numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");


////////////////////////////////
// LECTURE: Logical Operators //
////////////////////////////////
const isSpeakEnglish = true,
  numOfPeople = 20,
  isIsland = false;
if (isSpeakEnglish && !isIsland && numOfPeople < 50)
  console.log("You should live in " +country+ " :)");
else console.log(country+" does not meet your criteria :(");


///////////////////////////////////
// LECTURE: The switch Statement //
///////////////////////////////////
const language = "Arabic";
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}


/////////////////////////////////////////////////
// LECTURE: The Conditional (Ternary) Operator //
/////////////////////////////////////////////////
population > 33
  ? console.log(country + "'s population is above average")
  : console.log(country + "'s population is below average");
population = 13;
population > 33
  ? console.log(country + "'s population is above average")
  : console.log(country + "'s population is below average");
population = 130;
population > 33
  ? console.log(country + "'s population is above average")
  : console.log(country + "'s population is below average");


////////////////////////
// LECTURE: Functions //
////////////////////////
function describeCountry(country, population, capitalCity) {
  const format = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return format;
}

console.log(describeCountry("Egypt", 90, "Cairo"));
console.log(describeCountry("England", 50, "Landon"));
console.log(describeCountry("Palastine", 5, "Gaza"));


/////////////////////////////////////////////////////
// LECTURE:  Function Declarations vs. Expressions //
/////////////////////////////////////////////////////
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
console.log(china + "%");

const egypt = percentageOfWorld1(100);
console.log(egypt + "%");

const palastine = percentageOfWorld1(10);
console.log(palastine + "%");

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const china1 = percentageOfWorld2(1441);
console.log(china + "%");

const egypt1 = percentageOfWorld2(100);
console.log(egypt + "%");

const palastine1 = percentageOfWorld2(10);
console.log(palastine + "%");

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const egypt2 = percentageOfWorld3(100);
console.log(egypt + "%");


////////////////////////////////////////////////
// LECTURE: Functions Calling Other Functions //
////////////////////////////////////////////////
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
}

const china = describePopulation("China", 1441);
console.log(china);

const egypt = describePopulation("Egypt", 100);
console.log(egypt);

const palastine = describePopulation("Palastine", 10);
console.log(palastine);


/////////////////////////////////////
// LECTURE: Introduction to Arrays //
/////////////////////////////////////
const populations = [1441, 100, 10, 453];
console.log(populations.length == 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentages = [
  percentageOfWorld1(1441),
  percentageOfWorld1(100),
  percentageOfWorld1(10),
  percentageOfWorld1(453),
];
console.log(percentages);


///////////////////////////////////////////////
// LECTURE: Basic Array Operations (Methods) //
///////////////////////////////////////////////
const neighbours = ["Libiaa", "Sodan", "Saudiaa"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("South-Africa"))
  console.log("Egypt not a central Africa country :D");
neighbours[neighbours.indexOf("Libiaa")] = "Tunis";
console.log(neighbours);


//////////////////////////////////////
// LECTURE: Introduction to Objects //
//////////////////////////////////////
const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 100,
  neighbours: ["Libiaa", "Sodan", "Saudiaa"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length == 0 ? true : false;
  },
};
console.log(myCountry);

///////////////////////////////////////
// LECTURE: Dot vs. Bracket Notation //
///////////////////////////////////////
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry["population"]);

/////////////////////////////
// LECTURE: Object Methods //
/////////////////////////////
console.log(myCountry.describe());


///////////////////////////
// LECTURE: The for Loop //
///////////////////////////
for (let voter = 1; voter <= 50; voter++)
  console.log(`Voter number ${voter} is currently voting`);


//////////////////////////////////////////////////////
// LECTURE: Looping Arrays, Breaking and Continuing //
//////////////////////////////////////////////////////
const populations = [1441, 100, 10, 453];
const percentages2 = [];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
for (let i = 0; i < populations.length; i++)
  percentages2[i] = percentageOfWorld1(populations[i]);

console.log(percentages2);


///////////////////////////////////////////////////
// LECTURE: Looping Backwards and Loops in Loops //
///////////////////////////////////////////////////
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++)
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
}
*/

/////////////////////////////
// LECTURE: The while Loop //
/////////////////////////////
const populations = [1441, 100, 10, 453];
const percentages3 = [];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let i = 0;
while (i < populations.length) {
  percentages3[i] = percentageOfWorld1(populations[i]);
  i++;
}
console.log(percentages3);
