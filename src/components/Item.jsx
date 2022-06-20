import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, price }) => {
  return (
    <div className="item">
      <div className="item-img-container">
        <img className="item-img" src={image} alt="producto" />
      </div>
      <div className="item-info">
        <h2>{name}</h2>
        <h3>${price}</h3>
        <Link className="btn-detalle" to={`/detail/${id}`}>
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
