import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
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
    date: new Date(2020, 1, 16),
  },
  {
    id: "e4",
    title: "A Book",
    amount: 49.99,
    date: new Date(2022, 4, 16),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
