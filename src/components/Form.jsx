import React from "react";

const Form = ({ handleChange, data, handleSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control sm"
          placeholder="Nombre y apellido"
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
          required
        />
        <input
          className="form-control sm"
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <input
          className="form-control sm"
          placeholder="Confirme su email"
          type="email"
          name="emailCheck"
          onChange={handleChange}
          value={data.emailCheck}
          required
        />
        <input
          className="form-control sm"
          placeholder="Direccion de envio"
          type="text"
          name="adress"
          onChange={handleChange}
          value={data.adress}
          required
        />
        <input
          className="form-control sm"
          placeholder="Telefono"
          type="number"
          name="phone"
          onChange={handleChange}
          value={data.phone}
          required
        />
        <button
          disabled={data.email !== data.emailCheck}
          className="btn-eliminar"
        >
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default Form;
