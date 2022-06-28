import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, removeItem, clear } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((product) => (
        <div className="cart-item">
          <div className="cart-item-img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="cart-item-text">
            <h1>{product.name}</h1>
            <h3>Cantidad: {product.quantity}</h3>
            <h2>Precio: ${product.price}</h2>
            <p>{product.description}</p>
            <button
              className="btn-detalle-compra"
              onClick={() => removeItem(product.id)}
            >
              Eliminar producto
            </button>
            <div>
              <button className="btn-detalle-compra" onClick={clear}>
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
