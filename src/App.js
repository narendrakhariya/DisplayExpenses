import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };
  return (
    <div className="App">
      <h2>Display Expenses</h2>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
