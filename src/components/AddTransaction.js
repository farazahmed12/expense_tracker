import React, { useContext, useState } from "react";

// Import State
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionamount, setTransactionamount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime(),
      description,
      transactionamount: +transactionamount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add New Transation</h3>
      <form>
        <div className="form-control" onSubmit={onSubmit}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Transaction details"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="number"
            id="transactionamount"
            placeholder="Enter transaction amount"
            value={transactionamount}
            onChange={(e) => setTransactionamount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
