import productos from "./productos";

export const customFetch = () => {
  return new Promise((resolve) => {
    resolve(productos);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    resolve(productos.find((prod) => prod.id === id));
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    resolve(productos.filter((prod) => prod.category === category));
  });
};
