import React from "react";
import OrderCard from "./OrderCard.js";
import data from "../data.js";

export default function OrderPage(props) {
  var selecteds = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  function changeSelected(id) {
    selecteds[id - 1] = !selecteds[id - 1];
  }

  function sendToCart() {
    var trueIndices = selecteds.reduce(
      (out, bool, index) => (bool ? out.concat(index) : out),
      []
    );
    {
      props.handleClick(trueIndices);
    }
    alert("Added to Cart!");
  }

  const cards = data.map((item) => {
    return (
      <OrderCard
        key={item.id}
        item={item}
        handleClick={changeSelected}
        selected={selecteds[item.id - 1]}
      />
    );
  });

  return (
    <div>
      <div className="cards-list">{cards}</div>
      <button className="addToCart" onClick={sendToCart}>
        Add To Cart
      </button>
    </div>
  );
}
