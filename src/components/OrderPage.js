import React from "react";
import Card from "./Card.js";
import data from "../data.js";

export default function OrderPage() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <div className="cards-list">{cards}</div>
      <button className="addToCart">Add To Cart</button>
    </div>
  );
}
