import { useState } from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");
  const expenseYearOnChange = (expenseYear) => {
    setSelectedYear(expenseYear);
  };
  return (
    <div className="expenses">
      <ExpensesFilter expenseYearOnChange={expenseYearOnChange} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
