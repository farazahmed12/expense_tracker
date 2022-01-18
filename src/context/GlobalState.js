import React, { createContext, useContext, useReducer } from "react";

// Import the Reducer
import AppReducer from "./AppReducer";

// Create the initial state
const initialState = {
  transactions: [
    { id: 1, description: "Income 1", transactionamount: 100 },
    { id: 2, description: "Expense 1", transactionamount: -2000 },
    { id: 3, description: "Income 2", transactionamount: 500 },
    { id: 4, description: "Income 2", transactionamount: -600 },
  ],
};

// Create a Global Context
export const GlobalContext = createContext(initialState);

// Create a Global Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
