import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ id, name, description, stock, price, image }) => {
  const [booleano, setbBooleano] = useState(true);
  const { addItem } = useContext(CartContext);

  const addToCart = (quantity) => {
    addItem(id, image, name, price, quantity);
    setbBooleano(false);
  };

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
        {booleano ? (
          <ItemCount initial={1} onAdd={addToCart} stock={stock} />
        ) : (
          <div className="btn-container">
            <Link className="btn-detalle-compra" to={`/cart`}>
              Ir al carrito
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
