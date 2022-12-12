import React from "react";

export const DatosUsuario = () => {
  let nombre = "Pablo";
  let web = "pablopaez.com.ar";

  let usuario = {
    nombre: "Pablo",
    apellidos: "Paez Sheridan",
  };

  return (
    <div className="mi-componente">
      <h3>Datos del usuario</h3>
      <ul>
        <li>
          Nombre: <strong>{usuario.nombre}</strong>
        </li>
        <li>
          Apellidos: <strong>{usuario.apellidos}</strong>
        </li>
      </ul>
    </div>
  );
};
