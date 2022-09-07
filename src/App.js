import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import OrderPage from "./components/OrderPage";
import ContactPage from "./components/ContactPage";
import BottomBar from "./components/BottomBar";
import CartPage from "./components/CartPage";

export default function App() {
  const [counts, setCounts] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  function changeCounts(selecteds) {
    const newState = counts;
    for (var i = 0; i < selecteds.length; i++) {
      newState[selecteds[i]]++;
    }
    setCounts(newState);
  }

  function add(index) {
    const newState = counts;
    newState[index]++;
    setCounts(newState);
  }

  function subtract(index, amount) {
    const newState = counts;
    if (newState[index] <= amount) {
      newState[index] = 0;
    } else {
      newState[index] -= amount;
    }
    setCounts(newState);
  }

  function reset() {
    const newState = counts;
    for (var i = 0; i < 20; i++) {
      newState[i] = 0;
    }
    setCounts(newState);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/order"
          element={<OrderPage handleClick={changeCounts} />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/cart"
          element={
            <CartPage
              counts={counts}
              add={add}
              subtract={subtract}
              reset={reset}
            />
          }
        />
      </Routes>
      <BottomBar />
    </div>
  );
}
