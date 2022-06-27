import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
`;

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getProductsById(parseInt(id)).then((response) => {
      setProduct(response);
    });
  }, []);

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
        <div>
          <ItemDetail {...product} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
