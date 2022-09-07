import React from "react";
import data from "../data.js";
import CartCard from "./CartCard.js";

export default function CartPage(props) {
  const cards = data.map((item) => {
    if (props.counts[item.id - 1]) {
      return (
        <CartCard key={item.id} item={item} count={props.counts[item.id - 1]} />
      );
    }
  });

  return (
    <div className="cartPage">
      <div>{cards}</div>
    </div>
  );
}
