import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const bajarContador = () => {
        if (contador > 0) {
        setContador(contador - 1)
    }
    }

    return (
        <>
        <div className=" d-grid btn-group">
          <p className="fs-1">El contador va : {contador}</p>
          <button className="btn btn-outline-primary btn-lg" onClick={aumentarContador}>Aumentar</button>
          <button className="btn btn-outline-primary btn-lg" onClick={bajarContador}>Disminuir</button>
          <button className="btn btn-outline-success btn-lg" onClick={onAdd}>Confirmar</button>
        </div>
        </>
      )

}

export default ItemCount;