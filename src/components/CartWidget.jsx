import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { addItemNavBar } = useContext(CartContext);
  return (
    <>
      <p>{addItemNavBar()}</p>
      <Link to={`/cart`}>
        <span className="material-symbols-outlined">shopping_cart</span>
      </Link>
    </>
  );
};

export default CartWidget;
