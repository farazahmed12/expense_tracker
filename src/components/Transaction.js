import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div>
      <li className="plus">
        {transaction.description}
        <span>{transaction.transactionamount}</span>
        <button className="delete-btn">X</button>
      </li>
    </div>
  );
};

export default Transaction;
