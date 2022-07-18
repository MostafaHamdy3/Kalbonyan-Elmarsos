document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  //   console.log(text);

  const row = text.split("\n");
  for (const [i, s] of row.entries()) {
    const [first, second] = s.toLowerCase().trim().split("_");
    //  console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    //  console.log(output);
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
