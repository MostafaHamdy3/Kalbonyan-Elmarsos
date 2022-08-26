import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "TV",
      amount: 799.99,
      date: new Date(2021, 7, 23),
    },
    {
      title: "Car Insurance",
      amount: 290.5,
      date: new Date(2021, 9, 11),
    },
    {
      title: "Desk (Wooden)",
      amount: 449.99,
      date: new Date(2021, 12, 16),
    },
  ];

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses}></Expenses>
  //   </div>
  // );
}

export default App;
