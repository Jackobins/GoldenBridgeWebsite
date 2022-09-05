import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import companyLogo from "../images/gbLogo.png";
import cart from "../images/cartIcon.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={companyLogo} className="nav--image" />
        <h2>Golden Bridge</h2>
      </div>
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
        <button>
          <img src={cart} className="cartIcon" />
        </button>
      </div>
    </nav>
  );
}
