import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt="producto" />
      <h2>{item.name}</h2>
      <h3>${item.price}</h3>
    </div>
  );
};

export default Item;
