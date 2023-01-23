import { useState } from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import Card from "../ui/card/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const expenseYearOnChange = (expenseYear) => {
    setSelectedYear(expenseYear);
  };

  const filterExpenses = props.expenses.filter(
    (x) => x.date.getFullYear().toString() === selectedYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={selectedYear}
        expenseYearOnChange={expenseYearOnChange}
      />
      {filterExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
