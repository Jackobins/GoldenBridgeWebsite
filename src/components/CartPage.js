import React from "react";
import data from "../data.js";
import CartCard from "./CartCard.js";

export default function CartPage(props) {
  const [manualRerender, setManualRerender] = React.useState(false);

  function rerender() {
    // used to manually rerender this component
    setManualRerender((prev) => !prev);
  }

  function placeOrder() {
    alert("Order Placed!");
    {
      props.reset();
    }
    rerender();
  }

  const cards = data.map((item) => {
    if (props.counts[item.id - 1]) {
      return (
        <CartCard
          key={item.id}
          item={item}
          count={props.counts[item.id - 1]}
          add={props.add}
          subtract={props.subtract}
          rerender={rerender}
        />
      );
    }
  });

  return (
    <div className="cartPage">
      <div className="yourCart">
        <h2>Your Cart</h2>
        <div className="cartCardsList">{cards}</div>
      </div>
      <button className="placeOrder" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}
