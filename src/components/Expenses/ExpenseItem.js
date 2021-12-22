import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./myStyle.css";

const ExpenseItem = (props) => {
  // return React.createElement(
  //   "div",
  //   { className: "expense-item" },
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "Expense 1"),
  //     React.createElement("h1", {}, "Expense 1")
  //   )
  // );

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
