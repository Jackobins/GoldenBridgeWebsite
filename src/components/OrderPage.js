import React from "react";
import OrderCard from "./OrderCard.js";
import data from "../data.js";

export default function OrderPage() {
  const cards = data.map((item) => {
    return <OrderCard key={item.id} item={item} />;
  });

  return (
    <div>
      <div className="cards-list">{cards}</div>
      <button className="addToCart">Add To Cart</button>
    </div>
  );
}
