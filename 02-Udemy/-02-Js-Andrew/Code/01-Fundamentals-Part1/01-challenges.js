/*
/////////////////
// CHALLENGE 1 //
/////////////////

// TEST DATA 1
let weightsMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let BMI_mark = weightsMark / heightMark ** 2;
let BMI_john = weightJohn / heightJohn ** 2;

// console.log(BMI_mark, BMI_john);

let markHeightBMI = BMI_mark > BMI_john;

// console.log(markHeightBMI);

// TEST DATA 2
weightsMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

BMI_mark = weightsMark / heightMark ** 2;
BMI_john = weightJohn / heightJohn ** 2;

// console.log(BMI_mark, BMI_john);

markHeightBMI = BMI_mark > BMI_john;

// console.log(markHeightBMI);

/////////////////
// CHALLENGE 2 //
/////////////////
if (markHeightBMI)
  console.log(
    "Mark's BMI " + BMI_mark + " is higher than John's " + BMI_john + "!"
  );
else
  console.log(
    "John's BMI (" + BMI_john + ") is higher than Mark's (" + BMI_mark + ")!"
  );


/////////////////
// CHALLENGE 3 //
/////////////////

let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);


if (averageDolphins > averageKoalas) console.log("Dolphins win the trophy 🏆");
else if (averageDolphins < averageKoalas)
  console.log("Koalas win the trophy 🏆");
else console.log("equals");


averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins > 99)
  console.log("Dolphins win the trophy 🏆");
else if (averageDolphins < averageKoalas && averageKoalas > 99)
  console.log("Koalas win the trophy 🏆");
else console.log("NO one of teams win!");


averageKoalas = (109 + 95 + 106) / 3;
console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins > 99)
  console.log("Dolphins win the trophy 🏆");
else if (averageDolphins < averageKoalas && averageKoalas > 99)
  console.log("Koalas win the trophy 🏆");
else if (
  averageDolphins === averageKoalas &&
  averageDolphins > 99 &&
  averageKoalas > 99
)
  console.log("Both win the trophy!");
else console.log("NO one of the teams win!");


/////////////////
// CHALLENGE 4 //
/////////////////
let value = 275;
value >= 50 && value <= 300
  ? console.log(
      "The bill was " +
        value +
        ", the tip was " +
        value * 0.15 +
        ", and the total value " +
        value * 1.15
    )
  : console.log(
      "The bill was " +
        value +
        ", the tip was " +
        value * 0.2 +
        ", and the total value " +
        value * 1.2
    );

value = 40;
value >= 50 && value <= 300
  ? console.log(
      "The bill was " +
        value +
        ", the tip was " +
        value * 0.15 +
        ", and the total value " +
        value * 1.15
    )
  : console.log(
      "The bill was " +
        value +
        ", the tip was " +
        value * 0.2 +
        ", and the total value " +
        value * 1.2
    );

value = 430;
value >= 50 && value <= 300
  ? console.log(
      "The bill was " +
        value +
        ", the tip was " +
        value * 0.15 +
        ", and the total value " +
        value * 1.15
    )
  : console.log(
      "The bill was " +
        value +
        ", the tip was " +
        value * 0.2 +
        ", and the total value " +
        value * 1.2
    );
*/
