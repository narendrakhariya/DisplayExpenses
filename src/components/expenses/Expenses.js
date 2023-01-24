import { useState } from "react";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import ExpenseList from "../expense-list/ExpenseList";
import ExpensesChart from "../expenses-chart/ExpensesChart";
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
      <ExpensesChart expenses={filterExpenses} />
      <ExpenseList items={filterExpenses} />
    </Card>
  );
};

export default Expenses;
