import React from "react";

const Form = ({ handleChange, data, handleSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control sm"
          placeholder="Nombre"
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
          placeholder="Telefono"
          type="number"
          name="phone"
          onChange={handleChange}
          value={data.phone}
          required
        />
        <button className="btn-detalle-compra">Finalizar compra</button>
      </form>
    </div>
  );
};

export default Form;
