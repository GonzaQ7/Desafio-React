import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Form from "./Form";
import { db } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

function Cart() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });
  const [orderId, setOrderId] = useState("");
  const {
    cartItems,
    removeItem,
    clear,
    obtenerSubtotal,
    obtenerTotal,
    addItemNavBar,
  } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const objOrden = {
      buyer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        adress: data.adress,
      },
      cartItems,
      total: obtenerTotal(),
      date: serverTimestamp(),
    };

    const ref = collection(db, "orders");
    addDoc(ref, objOrden).then((response) => {
      setOrderId(response.id);
      clear();
    });
  };

  if (orderId !== "") {
    return (
      <>
        <div className="compra-container">
          <div className="compra">
            <h1>Compra realizada con exito!</h1>
            <h2>Su id de compra es: {orderId}</h2>
            <h3 className="compra-detail">Datos del comprador: </h3>
            <h3 className="compra-detail">Nombre: {data.name}</h3>
            <h3 className="compra-detail">Email: {data.email}</h3>
            <h3 className="compra-detail">Numero de telefono: {data.phone}</h3>
            <h3 className="compra-detail">Direccion de envio: {data.adress}</h3>
            <Link to="/" className="btn-eliminar">
              Volver a la tienda
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {addItemNavBar() === 0 ? (
          <div className="empty-carrito">
            <div>
              <h2>No hay elementos en tu carrito</h2>
              <Link to="/" className="btn-eliminar">
                Volver a la tienda
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-item-container">
            <div className="cart-item-item">
              {cartItems.map((product) => (
                <div className="">
                  <div className="cart-item">
                    <div className="cart-item-img-container">
                      <div className="cart-item-img">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </div>
                    <div className="cart-item-text">
                      <h1>{product.name}</h1>
                      <h3>Cantidad: {product.quantity}</h3>
                      <h2>Precio: ${product.price}</h2>
                      <p>{product.description}</p>
                      <p>
                        Subtotal: $
                        {obtenerSubtotal(product.price, product.quantity)}
                      </p>
                      <button
                        className="btn-eliminar"
                        onClick={() => removeItem(product.id)}
                      >
                        Eliminar producto
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-item-detail">
              <div className="cart-item-detail-text">
                <p>Total: ${obtenerTotal()}</p>
                <p>Cantidad de productos: {addItemNavBar()}</p>
                <p>Ingrese sus datos: </p>
                <Form
                  handleChange={handleChange}
                  data={data}
                  handleSubmit={handleSubmit}
                />
                <div className="btn-detail">
                  <Link to="/" className="btn-eliminar">
                    Seguir comprando
                  </Link>
                  <button className="btn-eliminar" onClick={clear}>
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
