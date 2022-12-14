import React, { useEffect, useState } from "react";
import { AvisoComponente } from "./AvisoComponente";

export const PruebasComponents = () => {
  const [username, setUsername] = useState("Pablo Paez");
  const [fecha, setFecha] = useState("01-02-1997");
  const [contador, setContador] = useState(0);

  const modUsername = (e) => {
    setUsername(e.target.value);
  };

  const cambiarFecha = (e) => {
    setFecha(Date.now());
  };

  useEffect(() => {
    console.log("Has cargado el componente pruebas component");
  }, []);

  useEffect(() => {
    setContador(contador + 1);
    console.log("Has modificado el usuario " + contador + " veces");
  }, [username]);

  return (
    <>
      <h1>El efecto - Hook useEffect</h1>
      <strong className={contador >= 10 ? "label label-green" : "label"}>
        {username}
      </strong>
      <strong className="label label-green">{fecha}</strong>
      <form>
        <input
          type="text"
          placeholder="Cambie el username"
          onChange={modUsername}
        />
      </form>
      <button onClick={cambiarFecha}>Cambiar Fecha</button>
      <hr />
      {username === "PABLO" && <AvisoComponente />}
    </>
  );
};
