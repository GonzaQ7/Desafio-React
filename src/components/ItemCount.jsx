import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);

  function adding() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function subs() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="item-count">
      <button onClick={subs}>-</button>
      <span>{count}</span>
      <button onClick={adding}>+</button>
    </div>
  );
};

export default ItemCount;
