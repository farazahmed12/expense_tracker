import React, { useContext } from "react";

import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction, ind) => {
          return <Transaction key={ind} transaction={transaction} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionHistory;
