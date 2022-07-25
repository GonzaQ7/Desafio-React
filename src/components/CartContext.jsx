import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);

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

  const addItemNavBar = () => {
    let quantity = 0;
    cartItems.forEach((product) => {
      quantity = quantity + product.quantity;
    });
    return quantity;
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const removeItem = (id) => {
    setcartItems(cartItems.filter((item) => item.id !== id));
  };

  const clear = () => {
    setcartItems([]);
  };

  const obtenerSubtotal = (precio2, quantity) => {
    let subtotal = 0;
    subtotal = subtotal + precio2 * quantity;
    return Number(subtotal);
  };

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
