import { createContext, useState } from "react";

// CartContex
const CartContext = createContext();

//Provider del Cart
const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);

  // Agregar un producto al Cart
  const addItem = (id, image, name, price, quantity) => {
    if (isInCart(id)) {
      let index = cartItems.findIndex((index) => index.id === id);
      let copiaCart = [...cartItems];
      copiaCart[index].quantity += quantity;
      setcartItems(copiaCart);
    } else {
      const itemToAdd = { id, image, name, price, quantity };
      setcartItems([...cartItems, itemToAdd]);
    }
  };

  // Agrega cantidad al icono del Cart en NavBar
  const addItemNavBar = () => {
    let quantity = 0;
    cartItems.forEach((product) => {
      quantity = quantity + product.quantity;
    });
    return quantity;
  };

  // Verifica si el producto ya fue agregado al Cart
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  //Quitar prducto del Cart
  const removeItem = (id) => {
    setcartItems(cartItems.filter((item) => item.id !== id));
  };

  //Vaciar Cart
  const clear = () => {
    setcartItems([]);
  };

  // Subtotal

  const obtenerSubtotal = (precio2, quantity) => {
    let subtotal = 0;
    subtotal = subtotal + precio2 * quantity;
    return Number(subtotal);
  };

  // Total

  const obtenerTotal = () => {
    let total = 0;
    cartItems.forEach((product) => {
      total = total + product.price * product.quantity;
    });

    return Number(total);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        addItemNavBar,
        isInCart,
        removeItem,
        clear,
        obtenerSubtotal,
        obtenerTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
