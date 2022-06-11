import React from "react";
import ItemCount from "./ItemCount";

function Item({ id, name, image, stock }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={id} />
      <ItemCount stock={stock} />
    </div>
  );
}

export default Item;
