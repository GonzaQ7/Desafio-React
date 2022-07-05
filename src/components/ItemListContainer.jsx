import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProd } from "../config/firebase";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const ref = categoryId
      ? query(collectionProd, where("category", "==", categoryId))
      : collectionProd;

    getDocs(ref).then((response) => {
      const products = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setProducts(products);
    });
  }, [categoryId]);

  //TRAER PRODUCTOS DE ARRAY DE OBJETOS
  // const [items, setItems] = useState([]);

  // const { category } = useParams();

  // useEffect(() => {
  //   setTimeout(() => {}, 1000);

  //   if (!category) {
  //     customFetch().then((response) => {
  //       setItems(response);
  //     });
  //   } else {
  //     getProductsByCategory(category).then((response) => {
  //       setItems(response);
  //     });
  //   }
  // }, [category]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
