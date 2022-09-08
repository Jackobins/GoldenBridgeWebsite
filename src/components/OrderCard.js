import React from "react";
import "../styles.css";

export default function OrderCard(props) {
  const [selected, setSelected] = React.useState(props.selected);

  function toggleSelected() {
    setSelected((prevSelected) => !prevSelected);
    {
      props.handleClick(props.item.id);
    }
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: selected && "grey" }}
      onClick={toggleSelected}
    >
      <h3>{props.item.name}</h3>
    </div>
  );
}
