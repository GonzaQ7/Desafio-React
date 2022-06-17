import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <h2>${product.price}</h2>
      <h3>Stock: {product.stock}</h3>
      <p>{product.description}</p>
      <ItemCount stock={product.stock} initial={1} />
    </div>
  );
};

export default ItemDetail;
