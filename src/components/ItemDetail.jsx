import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ name, description, stock, price, image }) => {
  const onAdd = (cantidadSeleccionada) => {
    console.log("Cantidad seleccionada: " + cantidadSeleccionada);
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
        <ItemCount initial={1} onAdd={onAdd} stock={stock} />
        <div className="btn-container">
          <Link className="btn-detalle-compra" to={`/cart`}>
            Terminar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
