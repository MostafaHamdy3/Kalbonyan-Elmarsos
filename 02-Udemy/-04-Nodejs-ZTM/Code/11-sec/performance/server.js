const express = require("express");
const os = require("os");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

app.get("/", (req, res) => {
  res.send(`Performance example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(4000);
  res.send(`Ding ding ding! ${process.pid}`);
});

console.log("Master has been started...");
console.log("Worker process started.");
app.listen(3000);
