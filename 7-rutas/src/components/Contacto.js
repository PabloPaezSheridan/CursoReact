import React from "react";
import { useNavigate } from "react-router-dom";

export const Contacto = () => {
  const navegar = useNavigate();
  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    navegar("/persona/" + apellido + "/" + nombre);
  };
  return (
    <>
      <h1>Esta es la pagina de contacto</h1>
      <form onSubmit={enviar}>
        <input type="text" name="nombre" />
        <input type="text" name="apellido" />
        <input type="submit" name="enviar" value="enviar" />
      </form>
    </>
  );
};
