import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { addItemNavBar } = useContext(CartContext);
  return (
    <>
      <div className="cart-widget">
        <Link to={`/cart`}>
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <div className="p-container">
          <p>{addItemNavBar()}</p>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
