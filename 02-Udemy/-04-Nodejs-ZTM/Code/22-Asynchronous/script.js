setTimeout(() => console.log("1", "is the loneliest number"), 0);
setTimeout(() => console.log("2", "can be as bad as on"), 10);

Promise.resolve("hi").then((data) => console.log("2", data));

console.log("3", "is a crowd");

const promise = new Promise((resolve, reject) => {
  if (true) resolve("stuff worked");
  else reject("Error, it broke");
});

const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "HI")
);

const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "Hello")
);

const promise4 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "It's me you are looking for?")
);

Promise.all([promise, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

promise.then((result) => console.log(result));

promise
  .then((result) => result + "!")
  .then((result2) => result2 + "?")
  .catch(() => console.log("error!"))
  .then((result3) => console.log(result3 + "!"));

movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(200, "Right")
  .then(() => 500, "Left");

async function playerStart() {
  await movePlayer(100, "Left");
  await movePlayer(400, "Left");
  await movePlayer(200, "Right");
  await movePlayer(500, "Left");
}

// Object spread operator
const animals = {
  tiger: 23,
  lion: 15,
  monkey: 10,
};

const arr = [3, 6, 7, 1];
function sum(a, b, c, d) {
  return a + b + c + d;
}
console.log(sum(...arr));

const { tiger, ...rest } = animals;

// Parallel, Sequence and Race
const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("A", 1000);
const b = () => promisify("B", 3000);
const c = () => promisify("C", 5000);

async function parellel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);

  return `prallel is done: ${output1} ${output2} ${output3}`;
}
parellel().then(console.log);

async function sequence() {
  const output4 = await a();
  const output5 = await b();
  const output6 = await c();
  return `sequence is done: ${output4} ${output5} ${output6}`;
}
sequence().then(console.log);

async function race() {
  const promises = [a(), b(), c()];

  const output7 = await Promise.race(promises);
  return `race is done: ${output7}`;
}
race().then(console.log);
