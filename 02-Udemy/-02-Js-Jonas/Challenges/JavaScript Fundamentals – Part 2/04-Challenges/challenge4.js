///////////////////
// Challenge (4) //
///////////////////
/*
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
*/
