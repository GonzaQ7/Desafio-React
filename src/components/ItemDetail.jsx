import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ name, id, description, stock, price, image }) => {
  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img src={image} alt={name} />
      </div>
      <div className="item-detail-text">
        <h1>{name}</h1>
        <h3>Stock: {stock}</h3>
        <h2>${price}</h2>
        <p>{description}</p>
        <ItemCount stock={stock} initial={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
