import React, { useEffect, useState } from "react";
import { guardarEnStorage } from "../helpers/GuardarEnStorage";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  //const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };

  const eliminarPelicula = (id) => {
    let pelis_almacendas = conseguirPeliculas();
    let nuevas_pelis = pelis_almacendas.filter((p) => p.id !== parseInt(id));
    setListadoState(nuevas_pelis);
    localStorage.setItem("pelis", JSON.stringify(nuevas_pelis));
  };

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  return (
    <>
      {listadoState !== null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                Editar
              </button>
              <button
                className="delete"
                onClick={() => eliminarPelicula(peli.id)}
              >
                Eliminar
              </button>
              {editar === peli.id && <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState}/>}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
