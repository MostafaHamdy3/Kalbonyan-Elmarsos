/*
///////////////////
// Challenge (1) //
///////////////////

const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas)
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas >= 2 * avgDolphins)
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  else console.log("No team wins!");
}

let avgDolphins = average(44, 23, 71);
let avgKoalas = average(65, 54, 49);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);

avgDolphins = average(85, 54, 41);
avgKoalas = average(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);


///////////////////
// Challenge (2) //
///////////////////
function calcTip(value) {
  if (value >= 50 && value <= 300) return value * 0.15;
  else return value * 0.2;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


///////////////////
// Challenge (3) //
///////////////////
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI() > john.calcBMI()
  ? console.log(
      `${mark.fullName}'s BMI (${mark.calcBMI()}) is heigher than ${
        john.fullName
      }'s (${john.calcBMI()})`
    )
  : console.log(
      `${john.fullName}'s BMI (${john.calcBMI()}) is heigher than ${
        mark.firstName
      }'s (${mark.calcBMI()})`
    );
*/

///////////////////
// Challenge (4) //
///////////////////
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(tip) {
  if (tip >= 50 && tip <= 300) return tip * 0.15;
  else return tip * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(tips, totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum / totals.length;
}
console.log(calcAverage(totals));
