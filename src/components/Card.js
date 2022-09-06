import React from "react";
import "../styles.css";

export default function Card(props) {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => {
      return prevCount == 0 ? 0 : prevCount - 1;
    });
  }

  return (
    <div className="card">
      <h3>{props.item.name}</h3>
      <div className="counter">
        <button className="counter--minus" onClick={subtract}>
          -
        </button>
        <div className="counter--count">
          <h3>{count}</h3>
        </div>
        <button className="counter--plus" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}
