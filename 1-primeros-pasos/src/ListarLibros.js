import React from "react";

export const ListarLibros = () => {
  const libros = ["Harry Potter", "Juego de Tronos"];

  return (
    <div className="ListarLibros">
      <h1>Listado de Libros</h1>
      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro, indice) => {
            return <li key={indice}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </div>
  );
};
