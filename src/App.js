import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import TransactionPage from "./Pages/TransactionPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TransactionPage />} />
      </Routes>
    </div>
  );
}

export default App;
