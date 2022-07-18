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
const [player1, player2] = game.players;
console.log(player1, player2);

// Number (2)
// const gk = player1[0];
// let fieldPlayers = [];
// for (let i = 1; i < player1.length; i++) {
//   fieldPlayers[i - 1] = player1[i];
// }
// console.log(gk, fieldPlayers);

// Easier solution
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// Number (3)
// const allPlayers = game.players;
// another solution
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// Number (4)
// const players1Final = [game.players[0] + ",Thiago" + ",Coutinho" + ",Peisic"];
// another solution
const players1Final = [...player1, "Thiago", "Coutinho", "Peisic"];
console.log(players1Final);

// Number(5)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Number(6)
const printGoals = function (...playersScored) {
  console.log(playersScored.length);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// *Number (7)
team1 > team2 && console.log("Team 2 is more likely to win");
team1 < team2 && console.log("Team 1 is more likely to win");
*/
