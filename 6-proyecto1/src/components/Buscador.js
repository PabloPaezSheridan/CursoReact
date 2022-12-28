import React, { useState } from "react";

export const Buscador = ({ setListadoState }) => {
  const [noEncontrado, setNoEncontrado] = useState(false);
  const buscarPeli = (e) => {
    let peliculas_almacenadas = JSON.parse(localStorage.getItem("pelis"));
    var peliculas_encontradas = ParcialMatch(
      peliculas_almacenadas,
      e.target.value
    );
    if (peliculas_encontradas.length > 0) {
      setListadoState(peliculas_encontradas);
      setNoEncontrado(false);
    } else {
      setListadoState([]);
      setNoEncontrado(true);
    }
  };

  function ParcialMatch(arr, sub) {
    // sub = sub.toLowerCase();
    // var result = arr.map((peli) =>
    //   peli.titulo
    //     .toLowerCase()
    //     .startsWith(sub.slice(0, Math.max(peli.titulo.length - 1, 1)))
    // );
    // var matches = [];
    // for (let index = 0; index < arr.length; index++) {
    //   if (result[index]) matches.push(arr[index]);
    // }
    // return matches;
    return arr.filter((peli) => {
      return peli.titulo.toLowerCase().includes(sub.toLowerCase());
    });
  }
  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          placeholder="Ingrese lo que esta buscando"
          onChange={buscarPeli}
        />
      </form>
      {noEncontrado && (
        <span className="no-encontrado">
          No se ha encontrado ninguna pelicula
        </span>
      )}
    </div>
  );
};
