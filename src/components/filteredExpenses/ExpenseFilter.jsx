import React, {useState} from "react";

import "./ExpenseFilter.css";

function ExpenseFilter({ onFilter, selected }) {
  
  const [selectedYear, setSelectedYear] = useState(selected)

  const filterHandler = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear)
    onFilter(selectedYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterHandler} value={selectedYear}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
