import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      <div className="item-list">
        {" "}
        {products.map((p) => (
          <Item key={p.id} {...p} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
