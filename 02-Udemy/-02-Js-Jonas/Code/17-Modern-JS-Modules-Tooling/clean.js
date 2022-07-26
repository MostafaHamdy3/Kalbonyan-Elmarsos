const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "mostafa" },
  { value: -45, description: "Groceries 🥑", user: "mostafa" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "mostafa" },
  { value: 300, description: "Freelancing 👩‍💻", user: "mostafa" },
  { value: -1100, description: "New iPhone 📱", user: "mostafa" },
  { value: -20, description: "Candy 🍭", user: "sarah" },
  { value: -125, description: "Toys 🚂", user: "sarah" },
  { value: -1800, description: "New Laptop 💻", user: "mostafa" },
]);

const spendingLimits = Object.freeze({
  mostafa: 1500,
  sarah: 100,
});
// spendingLimits.jay = 200;

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "mostafa"
) {
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // if (value <= getLimit(cleanUser)) {
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // budget.push({ value: -value, description: description, user: cleanUser });
  // }
};
const newBudge1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudge2 = addExpense(
  newBudge1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Sarah"
);
const newBudge3 = addExpense(newBudge2, spendingLimits, 200, "Stuff", "Jay");

// console.log(newBudge1);
// console.log(newBudge2);

// const checkExpenses2 = function (state, limits) {
//   return state.map((entry) => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: "limit" }
//       : entry;
//   });
//   // for (const entry of newBudge3)
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = "limit";
// };

const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );

const finalBudget = checkExpenses(newBudge3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, "");

  console.log(bigExpenses);
  // let output = "";
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? entry.description.slice(-2) + " / " : "";
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

// console.log(budget);
logBigExpenses(finalBudget, 400);
