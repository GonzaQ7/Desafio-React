import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { collectionProd } from "../config/firebase";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const ref = doc(collectionProd, id);
    getDoc(ref).then((response) => {
      setProduct({
        id: response.id,
        ...response.data(),
      });
    });
  }, [id]);

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;
