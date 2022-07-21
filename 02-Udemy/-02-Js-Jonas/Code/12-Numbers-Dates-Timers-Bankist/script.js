"use strict";

/////////////////
// BANKIST APP //
/////////////////

// Data
const account1 = {
  owner: "Mostafa Hamdy",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2020-11-18T21:31:17.178Z",
    "2020-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-05-08T14:11:59.604Z",
    "2022-07-14T17:01:17.194Z",
    "2022-07-17T23:36:17.929Z",
    "2022-07-19T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "en-US", // de-DE
};

const account2 = {
  owner: "Mostafa Mahmoud",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2020-11-01T13:15:33.035Z",
    "2020-11-30T09:48:16.867Z",
    "2020-12-25T06:04:23.907Z",
    "2021-01-25T14:18:46.235Z",
    "2021-02-05T16:33:06.386Z",
    "2021-04-10T14:43:26.374Z",
    "2021-06-25T18:49:59.371Z",
    "2022-07-19T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Omar Rashad",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    "2021-11-01T13:15:33.035Z",
    "2021-11-30T09:48:16.867Z",
    "2021-12-25T06:04:23.907Z",
    "2022-04-25T14:18:46.235Z",
    "2022-05-05T16:33:06.386Z",
    "2022-06-10T14:43:26.374Z",
    "2022-07-17T18:49:59.371Z",
    "2022-07-20T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    "2021-01-25T14:18:46.235Z",
    "2021-02-05T16:33:06.386Z",
    "2021-04-10T14:43:26.374Z",
    "2021-07-16T18:49:59.371Z",
    "2022-07-19T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4];
// const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  // slice() to keep movements as same after sort
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(acc);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
// calcPrintBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};
// calcDisplaySummary(account1.movements);

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    time--;
  };

  let time = 300;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

let currentAccount, timer;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // if (currentAccount && currentAccount.pin === ...)
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Dispaly UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    };
    // const local = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});

const updateUI = function () {
  // Display movements
  displayMovements(currentAccount);

  // Display balance
  calcPrintBalance(currentAccount);

  // Display summary
  calcDisplaySummary(currentAccount);
};

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Experimenting API
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
// const local = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat("en-US", options).format(now);

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Make the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // ADD movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2000);
  }
  inputLoanAmount.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////
// LECTURES

/*
console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number("43"));
console.log(+"34");

// Parsing
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("40px"));
console.log(Number.parseInt("e23", 10));
console.log(Number.parseInt("30px", 2));

console.log(Number.parseInt("   2.5rem  "));
console.log(Number.parseFloat("   2.5rem  "));

console.log("---isNaN----");
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20x"));
console.log(Number.isNaN(43 / 0));

// Checking if value is number
console.log("----isFinite----");
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20x"));
console.log(Number.isFinite(43 / 0));


console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 13, 6, 73, 2));
console.log(Math.max(5, 13, 6, "73", 2));
console.log(Math.max(5, 13, 6, "73px", 2));

console.log(Math.min(5, 13, 6, 73, 2));
console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
// 0 ... 1 -> 0 ... (max-min) -> min ... max
console.log(randomInt(10, 20));

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); // 24
console.log(Math.round(-23.3)); //-23
console.log(Math.round(-23.8)); //-24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
console.log(Math.ceil(-23.3)); //-23
console.log(Math.ceil(-23.7)); //-23

console.log(Math.floor(23.3)); // 23
console.log(Math.floor("23.9")); //23

console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.347).toFixed(2));
console.log(+(2.347).toFixed(2));


console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(43));
console.log(isEven(514));

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
    if (i % 3 == 0) row.style.backgroundColor = "blue";
  });
});


const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number("230_000"));
console.log(parseInt("230_000"));


console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(351070457017594767032547018);
console.log(351070457017594767032547018n);
console.log(BigInt(351070457017594767032547018));

// Operations
console.log(10000n + 10000n);
console.log(385092458710574045n * 10000n);

const huge = 24130878131209878183n;
const num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n == 20);
console.log(20n === 20);

console.log(typeof 20n);
// console.log(Math.sqrt(16n));

// Divisions
console.log(10n / 3n);


const now = new Date();
console.log(now);

console.log(new Date("Aug 10 2021 10:00"));
// year - month - day - hour - minuit - second
console.log(new Date(2022, 9, 6, 9, 45, 30));

const future = new Date(2034, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.toISOString());


const future = new Date(2022, 9, 6, 9, 45, 30);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2022, 3, 14), new Date(2022, 3, 4));
console.log(days1);

const days2 = calcDaysPassed(new Date(2022, 5, 14), new Date(2022, 3, 4));
console.log(days2);


const num = 3884764.23;
const option = {
  style: "unit",
  unit: "mile-per-hour",
  currency: "EUR",
};
console.log(new Intl.NumberFormat("en-US", option).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, option).format(num)
);


const ingredients = ["oliver", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  2000,
  ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 2000);
*/
