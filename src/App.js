import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import OrderPage from "./components/OrderPage";
import ContactPage from "./components/ContactPage";
import BottomBar from "./components/BottomBar";
import CartPage from "./components/CartPage";

export default function App() {
  var selecteds = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  function changeSelected(newSelecteds) {
    selecteds = newSelecteds;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/order"
          element={
            <OrderPage selecteds={selecteds} handleClick={changeSelected} />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <BottomBar />
    </div>
  );
}
