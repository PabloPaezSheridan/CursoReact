import React, { useRef } from "react";

export const Formulario = () => {
  const nombreInput = useRef("");
  const apellidoInput = useRef("");
  const correoInput = useRef("");
  const miCaja = useRef();

  const mostrar = (e) => {
    e.preventDefault();
    console.log(nombreInput.current.value);
    console.log(apellidoInput.current.value);
    console.log(correoInput.current.value);

    let { current: caja } = miCaja;
    caja.classList.add("fondoVerde");
    caja.innerHTML = "<h2>Formulario enviado</h2>";
  };
  return (
    <div>
      <h1>Formulario</h1>
      <div className="miCaja" ref={miCaja}>
        <h2>Pruebas con useRef</h2>
      </div>
      <form onSubmit={mostrar}>
        <input type="text" placeholder="Nombre" ref={nombreInput} />
        <br />
        <input type="text" placeholder="Apellidos" ref={apellidoInput} />
        <br />
        <input
          type="email"
          placeholder="Correo Electronico"
          ref={correoInput}
        />
        <br />
        <input type="submit" value="Enviar" />
      </form>
      <button
        onClick={() => {
          nombreInput.current.select();
        }}
      >
        Empezar a rellenar form
      </button>
    </div>
  );
};
