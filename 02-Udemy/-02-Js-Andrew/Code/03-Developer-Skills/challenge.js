let temperatures = [17, 21, 23];
console.log(
  `... ${temperatures[0]}°C in 1 days ... ${temperatures[1]}°C in 2 days ... ${temperatures[2]}°C in 3 days ...`
);
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++)
    str = str + `${arr[i]}°C in ${i + 1} days ... `;

  console.log("... " + str);
};

printForecast(temperatures);
printForecast([12, 5, -5, 0, 4]);
