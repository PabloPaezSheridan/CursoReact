import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <h1>Esta es la pagina de inicio</h1>
      <p>
        Ir a <Link to="/contacto">contacto</Link>
      </p>
    </>
  );
};
