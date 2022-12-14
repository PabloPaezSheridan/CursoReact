import React, { useEffect } from "react";

export const AvisoComponente = () => {
  useEffect(() => {
    alert("El componente esta montado");
    return () => {
      alert("Componente desmontado");
    };
  }, []);
  return (
    <div>
      <h3>Hola Pablo como estas?</h3>
      <button onClick={(e) => alert("Bienvenido")}>Mostrar Alerta</button>
    </div>
  );
};
