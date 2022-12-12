import React from "react";
import PropTypes from "prop-types";

export const TerecerComponente = ({ nombre, apellido, altura, grupo }) => {
  return (
    <div className="TercerComponente">
      <ul>
        <li>Altura: {altura}</li>
        <li>Grupo: {grupo}</li>
        <li>Nombre: {nombre}</li>
      </ul>
    </div>
  );
};

TerecerComponente.propTypes = {
  altura: PropTypes.number.isRequired,
  grupo: PropTypes.string,
};

TerecerComponente.defaultProps = {
  nombre: "Pablo",
  apellido: "Paez",
};
