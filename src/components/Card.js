import React from "react";
import "../styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <h3>{props.item.name}</h3>
    </div>
  );
}
