import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeItem,
    clear,
    obtenerSubtotal,
    obtenerTotal,
    addItemNavBar,
  } = useContext(CartContext);

  return (
    <div>
      {addItemNavBar() === 0 ? (
        <div>
          <div>
            <h2>No hay elementos en tu carrito</h2>
            <Link to="/" className="btn-detalle-compra">
              Ir a la tienda
            </Link>
          </div>
        </div>
      ) : (
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
                <p>
                  Subtotal: ${obtenerSubtotal(product.price, product.quantity)}
                </p>
                <button
                  className="btn-detalle-compra"
                  onClick={() => removeItem(product.id)}
                >
                  Eliminar producto
                </button>
              </div>
            </div>
          ))}

          <div className="cart-item">
            <div>
              <button className="btn-detalle-compra" onClick={clear}>
                Vaciar Carrito
              </button>
              <div className="cart-item-text">
                <p>Total: ${obtenerTotal()}</p>
                <p>Cantidad de items:</p>
                <p>{addItemNavBar()}</p>
                <Link to="/" className="btn-detalle-compra">
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
}

export default Cart;
