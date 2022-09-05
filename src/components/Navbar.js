import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <h2
        onClick={() => {
          navigate("/");
        }}
      >
        Golden Bridge
      </h2>
      <div className="nav--buttons">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/order");
          }}
        >
          Order
        </button>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
