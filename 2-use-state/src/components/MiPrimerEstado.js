import React, { useState } from "react";

export const MiPrimerEstado = () => {
  //   let nombre = "PabloPaez";

  //   const cambiarNombre = (e) => {
  //     nombre = "Clara Herrera";
  //   };
  let [nombre, setNombre] = useState("Clara Herrera");
  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
    console.log(e);
  };
  return (
    <div>
      <h3>Componente: MiPrimerEstado</h3>
      <stong className="label">{nombre}</stong>
      &nbsp;
      <button onClick={(e) => cambiarNombre(e, "Pablo Paez")}>
        Cambiar nombre por Pablo
      </button>
      &nbsp;
      <input
        type="text"
        onChange={(e) => cambiarNombre(e, e.target.value)}
        placeholder="Cambia el nombre"
      />
    </div>
  );
};
