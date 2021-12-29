import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  return (
    <div>
      <ExpenseFilter
        selected={filterYear}
        onChangefilter={filterChangeHandler}
      />
      {props.item.map((expense) => (
        <ExpenseItem
          // key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          
        />
      ))}
    </div>
  );
};

export default Expenses;
