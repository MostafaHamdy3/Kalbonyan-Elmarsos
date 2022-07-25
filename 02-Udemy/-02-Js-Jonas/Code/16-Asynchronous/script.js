"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
         <h3 class="country__name">${data.name}</h3>
         <h4 class="country__region">${data.region}</h4>
         <p class="country__row"><span>👫</span>${(
           +data.population / 1000000
         ).toFixed(1)} people</p>
         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
   </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;

  console.log(data);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    // Render country
    renderCountry(data);

    // Get neighbour country
    //  const neighbour = data.borders?.[0];
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data);

      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("egypt");
// getCountryAndNeighbour("palestine");
*/

// const request = fetch("https://restcountries.com/v2/name/egypt");

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[1];

      if (!neighbour) throw new Error("No neighbour found!");

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener("click", function () {
//   getCountryData("egypt");
// });
// getCountryData("palestine");
// getCountryData("gsdgrvkf");
// getCountryData("australia");

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[1];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.log(`${err} 💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/*
console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));

Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 100; i++) {}
  console.log(res);
});

console.log("Test end");


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening 🔮");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN 💰");
    } else {
      reject(new Error("You lost your money 💩"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log("I wait for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("I wait for 1 seconds "));

wait(1)
  .then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 second passed");
    return wait(1);
  })
  .then(() => console.log("4 second passed"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem!")).catch((x) => console.error(x));


const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};

btn.addEventListener("click", whereAmI);


const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong 💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};
console.log("1: Will get location");
const city = whereAmI();
console.log(city);
whereAmI()
  .then((city) => console.log(`2: ${city}`))
  .catch((err) => console.error(`2: ${err.message} 💥`))
  .finally(() => console.log("3: Finished getting location"));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log("3: Finished getting location");
});


const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSONgetJSON(`https://restcountries.com/v2/name/${c2}`);

    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
    ]);
    // map for loop to data array
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};
get3Countries("egypt", "palestine", "canada");
*/

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/portugal`),
    getJSON(`https://restcountries.com/v2/name/palestine`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/egypt`), timeout(5)])
  .then((res) => console.log(res[0]))
  .catch((err) => console.log(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.any
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
