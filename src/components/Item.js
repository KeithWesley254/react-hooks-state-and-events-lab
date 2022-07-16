import React, { useState } from "react";

function Item({ name, category }) {
  const [inTheCart, setInTheCart] = useState(false)

  function handleClick(){
    setInTheCart((inTheCart) => !inTheCart)
  }
  return (
    <li className={inTheCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inTheCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
