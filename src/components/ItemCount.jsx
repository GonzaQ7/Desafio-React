import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

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

  function confirm(e) {
    onAdd(count);
  }
  return (
    <div className="item-count">
      <div>
        <button className="item-count-btn" onClick={subs}>
          -
        </button>
        <span>{count}</span>
        <button className="item-count-btn" onClick={adding}>
          +
        </button>
      </div>

      <button className="item-count-confirm" onClick={confirm}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
