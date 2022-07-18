const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Java", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  // Number (1.1)
  registerNewAnswer() {
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(input);

    // Number(1.2)
    typeof input === "number" &&
      input >= 0 &&
      input < this.answers.length &&
      this.answers[input]++;

    //  console.log(this.answers);
    //  this.displayResults();
    this.displayResults("string");
  },

  // Number (3)
  displayResults(type) {
    typeof type === "string"
      ? console.log(`Poll results are ${this.answers.join(", ")}`)
      : console.log(this.answers);
  },
};
// poll.registerNewAnswer();

// Number (2)
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
