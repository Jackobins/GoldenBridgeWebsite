import React from "react";
import data from "../data.js";
import CartCard from "./CartCard.js";

export default function CartPage(props) {
  const [manualRerender, setManualRerender] = React.useState(false);

  function rerender() {
    // used to manually rerender this component
    setManualRerender((prev) => !prev);
  }

  const [clientDetails, setClientDetails] = React.useState({
    name: "",
    address: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
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

  let disabled =
    props.counts.every((element) => element == 0) ||
    clientDetails.name == "" ||
    clientDetails.address == "";

  return (
    <div className="cartPage">
      <div className="yourCart">
        <h2>Your Cart</h2>
        <div className="cartCardsList">{cards}</div>
      </div>
      <div className="form">
        <h2>Please Enter Your Delivery Details</h2>
        <div className="form--inputs">
          <input
            type="text"
            placeholder="Name"
            className="form--input"
            name="name"
            value={clientDetails.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            className="form--input"
            name="address"
            value={clientDetails.address}
            onChange={handleChange}
          />
        </div>
        <button className="placeOrder" disabled={disabled} onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
