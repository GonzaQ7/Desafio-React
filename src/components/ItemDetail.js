import React from "react";
import Item from "./Item";

function ItemDetail({ products }) {
  return products.map((p) => (
    <>
      <Item
        id={p.id}
        name={p.name}
        description={p.description}
        image={p.image}
        stock={p.stock}
      />
    </>
  ));
}

export default ItemDetail;
