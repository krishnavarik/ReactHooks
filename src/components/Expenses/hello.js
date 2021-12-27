import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./myStyle.css";

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const changeTitle = () => {
    setAmount("100$");

    setTitle("my new tv");
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">${amount}</div>
      </div>

      <button onClick={changeTitle}>change Title</button>
    </div>
  );
};

export default ExpenseItem;
