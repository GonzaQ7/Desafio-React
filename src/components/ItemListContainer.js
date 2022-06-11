import { useState, useEffect } from "react";
import productos from "../utils/products";
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    customFetch(3000, productos).then((result) => setItems(result));
  }, [items]);

  return (
    <>
      <ItemList products={items} />
    </>
  );
};

export default ItemListContainer;
