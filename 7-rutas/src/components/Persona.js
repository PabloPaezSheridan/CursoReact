import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Persona = () => {
  const { apellido, nombre = "Santiago" } = useParams();
  console.log({ apellido, nombre });
  return (
    <>
      <h1>Esta es la pagina de Persona</h1>
      <p>
        Es el sitio de {apellido}, {nombre}
      </p>
    </>
  );
};
