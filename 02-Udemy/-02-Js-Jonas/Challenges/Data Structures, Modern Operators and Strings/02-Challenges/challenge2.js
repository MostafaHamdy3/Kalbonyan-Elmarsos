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

// Number (1)
// const entries = Object.values(game.scored);
// let x = 1;
// for (const value of entries) {
//   console.log(`Goal ${x}: ${value}`);
//   x++;
// }
// Another solution
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// Number (2)
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
const average = sum / odds.length;
console.log(average);

// Number (3)
// const arr = Object.values(game.odds);
// console.log(`Odd of victory Bayern Munich: ${arr[0]}`);
// console.log(`Odd of draw: ${arr[1]}`);
// console.log(`Odd of victory Borrussia Dortmund: ${arr[2]}`);
// another solution
for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === "x" ? "draw" : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}

// Number (4)
const scorers = {};
for (const playerScore of game.scored) {
  scorers[playerScore] ? scorers[playerScore]++ : (scorers[playerScore] = 1);
}
console.log(scorers);
*/
