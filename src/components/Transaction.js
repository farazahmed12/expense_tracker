import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div>
      <li className="plus">
        {transaction.description}
        <span>$1,000</span>
        <button className="delete-btn">X</button>
      </li>
    </div>
  );
};

export default Transaction;
