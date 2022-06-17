import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { traerProductos } from "../utils/product";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
