/*
// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 44;
if (x === 44) console.log(44);


const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTemAmlitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTemAmlitude(temperatures);
console.log(amplitude);

const calcTemAmlitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcTemAmlitudeNew([5, 7, 9, 3], [4, 7, 5, 2]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: "tempreture",
    unit: "celsius",
    value: Number(prompt("Degrees celsius")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/
