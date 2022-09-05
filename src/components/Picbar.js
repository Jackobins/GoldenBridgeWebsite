import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Picbar() {
  const navigate = useNavigate();

  return (
    <div className="color-overlay">
      <h1>GOLDEN BRIDGE</h1>
      <button
        onClick={() => {
          navigate("/order");
        }}
      >
        Order
      </button>
    </div>
  );
}
