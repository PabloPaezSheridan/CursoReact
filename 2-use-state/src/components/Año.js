import React, { useState } from "react";
import PropTypes from "prop-types";

export const Año = ({ año }) => {
  let [añoAhora, setAñoAhora] = useState(año);

  const incrementar = () => {
    let cambio = añoAhora + 1;
    setAñoAhora(cambio);
  };

  const decrementar = () => {
    let cambio = añoAhora - 1;
    setAñoAhora(cambio);
  };

  const cambiarAño = (e, cambio) => {
    setAñoAhora(cambio);
  };
  return (
    <div className="Año">
      <h1>{añoAhora}</h1>
      <button onClick={decrementar}>Decrementar</button>
      &nbsp;
      <button onClick={incrementar}>Incrementar</button>
      <p>
        <input
          type="number"
          placeholder="Ingrese un año"
          onChange={(e) => cambiarAño(e, e.target.value)}
        />
      </p>
    </div>
  );
};

Año.propTypes = {
  año: PropTypes.number.isRequired,
};
