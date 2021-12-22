import React from 'react'

import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expense = [
    {
      title: "New Tv",
      amount: 222.22,
      date: new Date(2021, 3, 22),
    },
    {
      title: "Mobile Emi",
      amount: 333.22,
      date: new Date(2021, 3, 22),
    },
    {
      title: "Car Insurance",
      amount: 444.22,
      date: new Date(2021, 3, 22),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "let 's get Started"),
  //   React.createElement(Expenses, { item: expense })
  // );

  return (

    <div>
    
      <Expenses item={expense} />
    </div>
  );
}

export default App;
