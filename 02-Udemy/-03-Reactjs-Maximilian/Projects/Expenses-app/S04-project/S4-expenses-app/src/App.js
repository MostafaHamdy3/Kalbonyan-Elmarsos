import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "TV",
      amount: 799.99,
      date: new Date(2021, 7, 23),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 290.5,
      date: new Date(2021, 9, 11),
    },
    {
      id: "e3",
      title: "Desk (Wooden)",
      amount: 449.99,
      date: new Date(2021, 12, 16),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
