import React, { useEffect, useState } from "react";
import { customFetch, getProductsByCategory } from "../utils/customFetch";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
`;

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

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

  return (
    <>
      {loading ? (
        <div className="moonloader-container">
          <MoonLoader
            color={"#034FC5"}
            css={override}
            loading={loading}
            size={75}
          />
        </div>
      ) : (
        <ItemList products={items} />
      )}
    </>
  );
}

export default ItemListContainer;
