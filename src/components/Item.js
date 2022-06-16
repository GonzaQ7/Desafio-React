import React from "react";
import ItemCount from "./ItemCount";

function Item({ id, name, image, stock, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={id} />
      <h2>{description}</h2>
      <ItemCount stock={stock} />
    </div>
  );
}

export default Item;
