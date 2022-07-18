/*

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// Number (1)
const arr = [...gameEvents.values()];
console.log(arr);
const set = new Set(arr);
console.log(set);

// Number (2)
// console.log(gameEvents.size);
gameEvents.delete(64);
// console.log(gameEvents.size);
console.log(gameEvents);

// Number (3)
console.log(`An event happened, on 
average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on 
average, every ${time / gameEvents.size} minutes`);

// Number (4)
for (const [key, value] of gameEvents) {
  if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  else console.log(`[SECOND HALF] ${key}: ${value}`);
}
*/
