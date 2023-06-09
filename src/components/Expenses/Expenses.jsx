import React, { useState } from "react";

import Card from "../../UI/Card";
import ExpenseFilter from "../filteredExpenses/ExpenseFilter";
import ExpensesList from "../Expenses/ExpensesList";
import ExpensesChart from './ExpensesChart'
import "./Expenses.css";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2023);

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilter={filterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
