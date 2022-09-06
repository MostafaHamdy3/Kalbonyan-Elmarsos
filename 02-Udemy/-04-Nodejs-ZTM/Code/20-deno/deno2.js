// const food = "love";
const food = Deno.args[0];

if (food === "hate") console.log("🦕... Deno is born!");
else console.log("🥚... this egg needs some love");

// setTimeout(() => console.log("check"), 1000);

// console.table(Deno.metrics());
