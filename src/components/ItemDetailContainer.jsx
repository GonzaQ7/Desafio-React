import { useState, useEffect } from "react";
import products from "../utils/products";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    customFetch(1000, products).then((result) => setItems(result));
  }, [items]);

  console.log(items[0]);

  return <ItemDetail products={items} />;
};

export default ItemDetailContainer;
