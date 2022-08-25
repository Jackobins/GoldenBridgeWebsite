import React from "react";
import "../styles.css";

export default function Navbar() {
  return (
    <nav>
      <h2>Golden Bridge</h2>
      <div className="nav--buttons">
        <button>Home</button>
        <button>Products</button>
        <button>Contact</button>
      </div>
    </nav>
  );
}
