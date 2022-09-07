import React from "react";
import garbageCan from "../images/garbageCanLogo.png";

export default function CartCard(props) {
  const [count, setCount] = React.useState(props.count);

  function add() {
    setCount((prevCount) => prevCount + 1);
    props.add(props.item.id - 1);
  }

  function subtract() {
    setCount((prevCount) => (prevCount == 0 ? 0 : prevCount - 1));
    props.subtract(props.item.id - 1, 1);
    {
      props.rerender();
    }
  }

  function remove() {
    props.subtract(props.item.id - 1, count);
    setCount(0);
    {
      props.rerender();
    }
  }

  return (
    <div className="cartCard">
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
      <img src={garbageCan} className="deleteimg" onClick={remove}></img>
    </div>
  );
}
