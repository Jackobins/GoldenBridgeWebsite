import React from "react";
import "../styles.css";

export default function OrderCard(props) {
  const [selected, setSelected] = React.useState(false);

  function toggleSelected() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: selected && "grey" }}
      onClick={toggleSelected}
    >
      <h3>{props.item.name}</h3>

      {/* <div className="counter">
        <button className="counter--minus" onClick={subtract}>
          -
        </button>
        <div className="counter--count">
          <h3>{count}</h3>
        </div>
        <button className="counter--plus" onClick={add}>
          +
        </button>
      </div> */}
    </div>
  );
}
