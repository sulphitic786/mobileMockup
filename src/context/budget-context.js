import React from "react";


export const initialState = JSON.parse(
  localStorage.getItem("transactions")
) || [
  {
    amount: 500,
    category: "BTC",
    type: "Income",
    date: "2022-01-26",
    percent: -0.02,
    id: "44c68123-5b86-4cc8-b915-bb9e16cebe6a",
  },
  {
    amount: 250,
    category: "USDT",
    type: "Expense",
    date: "2022-01-30",
    percent: 0.01,
    id: "c5647dde-d857-463d-8b4e-1c866cc5f83e",
  },
  {
    amount: 125,
    category: "BNB",
    type: "Income",
    date: "2022-01-26",
    percent: -0.02,
    id: "33b295b8-a8cb-49f0-8f0d-bb268686de1a",
  },
  {
    amount: 150,
    category: "USDC",
    type: "Income",
    date: "2022-01-23",
    percent: 0.01,
    id: "270304a8-b11d-4e16-9341-33df641ede64",
  },
 
  {
    amount: 120,
    category: "MATIC",
    type: "Expense",
    date: "2022-01-30",
    percent: -0.02,
    id: "0f72e66e-e144-4a72-bbc1-c3c92018635e",
  },

 
];

export const BudgetContext = React.createContext(initialState);
