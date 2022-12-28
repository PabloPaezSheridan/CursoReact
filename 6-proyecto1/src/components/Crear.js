import React, { useState } from "react";
import { guardarEnStorage } from "../helpers/GuardarEnStorage.js";

export const Crear = ({ setListadoState }) => {
  const titulo = "Añadir Pelicula";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });
  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let peli = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };
    setPeliState(peli);
    setListadoState((elementos) => {
      return [...elementos, peli];
    });
    guardarEnStorage("pelis", peli);
    e.target.titulo.value = "";
    e.target.descripcion.value = "";
  };

  return (
    <div className="add">
      <h3 className="title">{titulo}</h3>
      {peliState.titulo !== "" && <p>Ultima peli: {peliState.titulo}</p>}
      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" aria-placeholder="Titulo" />
        <textarea id="descripcion" placeholder="Descripcion"></textarea>
        <button type="submit" id="save" value="Gurdar">
          Guardar
        </button>
      </form>
    </div>
  );
};
