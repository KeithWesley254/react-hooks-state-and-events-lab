import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterD, setFilter] = useState("All")
  const [theChosen, setChosen] = useState(items)

  function handleFilter(e){
    setFilter(e.target.value)
  }

  const mashakura = theChosen.filter((shakura) => {
    if(filterD === "All"){
      return true
    } else {
      return shakura.category === filterD
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {mashakura.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
