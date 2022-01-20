import React, { createContext, useReducer } from "react";

// Import the Reducer
import AppReducer from "./AppReducer";

// Create the initial state
const initialState = {
  transactions: [],
};

// Create a Global Context
export const GlobalContext = createContext(initialState);

// Create a Global Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for Delete Transactions
  function delTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  // Actions for Add Transactions
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
