import { useState, useEffect } from "react";
import products from "../utils/products";
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    customFetch(1000, products).then((result) => setItems(result));
  }, [items]);

  return (
    <>
      <div className="item-list-container">
        <ItemList products={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
