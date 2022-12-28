import React from "react";

export const Editar = ({
  peli,
  conseguirPeliculas,
  setEditar,
  setListadoState,
}) => {
  const titulo_componente = "Editar pelicula";
  const guardarEdicion = (e, peliId) => {
    e.preventDefault();
    const pelis_almacendas = conseguirPeliculas();
    const indice = pelis_almacendas.findIndex((peli) => peli.id === peliId);
    let peli_actualizada = {
      id: peliId,
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };
    pelis_almacendas[indice] = peli_actualizada;
    localStorage.setItem("pelis", JSON.stringify(pelis_almacendas));
    setListadoState(pelis_almacendas);
    setEditar(0);
  };
  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        />
        <input type="submit" value="Actualizar" className="editar" />
      </form>
    </div>
  );
};
