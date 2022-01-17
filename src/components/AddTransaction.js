import React, { useState } from "react";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionamount, setTransactionamount] = useState("");

  return (
    <div>
      <h3>Add New Transation</h3>
      <form>
        <div className="form-control">
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
