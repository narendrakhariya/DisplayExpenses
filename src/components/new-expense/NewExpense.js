import "./NewExpense.css";
import ExpenseForm from "../expense-form/ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isHideNewExpenseForm, setIsHideNewExpenseForm] = useState(true);

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };

  const clickAddNewExpenseHandler = () => {
    setIsHideNewExpenseForm(false);
  };

  const cancelAddNewExpenseHandler = (isHideAddNewExpenseForm) => {
    setIsHideNewExpenseForm(isHideAddNewExpenseForm);
  };

  return (
    <div className="new-expense">
      {isHideNewExpenseForm ? (
        <button type="button" onClick={clickAddNewExpenseHandler}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onCancelAddNewExpense={cancelAddNewExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
