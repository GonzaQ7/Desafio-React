import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return products.map((p) => (
    <Item
      id={p.id}
      name={p.name}
      description={p.description}
      image={p.image}
      key={p.id}
      stock={p.stock}
    />
  ));
}
export default ItemList;
