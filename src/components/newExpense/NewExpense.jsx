import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

function NewExpense({ onAddExpense }) {
  const [isAdding, setIsAdding] = useState(false);
  const addingHandler = () => {
    setIsAdding(true);
  };
  const addDataHandler = (formsExpenseData) => {
    const expenseData = {
      ...formsExpenseData,
      id: crypto.randomUUID(),
    };
    onAddExpense(expenseData);
    setIsAdding(false);
  };

  const cancelHandler = () => {
    setIsAdding(false);
  };
  return (
    <div className="new-expense">
      {!isAdding && <button onClick={addingHandler}>Add New Expense</button>}
      {isAdding && (
        <ExpenseForm onAddData={addDataHandler} onCancel={cancelHandler} />
      )}
    </div>
  );
}

export default NewExpense;
