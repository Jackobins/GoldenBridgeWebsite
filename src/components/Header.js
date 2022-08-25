import React from "react";
import Navbar from "./Navbar";
import Picbar from "./Picbar";
import "../styles.css";

export default function Header() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
        <div className="container">
          <hr />
        </div>
      </div>
      <Picbar />
    </div>
  );
}
