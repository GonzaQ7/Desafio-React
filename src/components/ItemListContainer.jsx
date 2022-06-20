import React, { useEffect, useState } from "react";
import { customFetch, getProductsByCategory } from "../utils/customFetch";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { category } = useParams();
  console.log(typeof category);

  useEffect(() => {
    if (!category) {
      customFetch().then((response) => {
        setItems(response);
      });
    } else {
      getProductsByCategory(category).then((response) => {
        setItems(response);
      });
    }
  }, [category]);

  return <ItemList products={items} />;
}

export default ItemListContainer;
