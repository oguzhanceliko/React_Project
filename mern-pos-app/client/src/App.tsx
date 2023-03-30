import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BillPage from "./pages/BillPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
        <Route path="/customers" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
