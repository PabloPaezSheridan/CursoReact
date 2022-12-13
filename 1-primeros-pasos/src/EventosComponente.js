import React from "react";

export const EventosComponente = () => {
  const disteClick = (e, nombre) => {
    console.log(nombre);
    console.log(e);
    alert("Hola " + nombre + " diste click al super boton");
  };

  const disteDobleClick = (e, segundoNombre) => {
    console.log(segundoNombre);
    console.log(e);
    alert("Hola " + segundoNombre + " diste doble click al super boton");
  };

  const pasaste = (e, accion) => {
    console.log("Has" + accion + "a la caja con el mouse ");
  };

  const estasDentro = (e) => {
    console.log("Estoy dentro del input");
  };

  const estasFuera= e =>{
    console.log("Estoy fuera")
  }
  return (
    <div className="Eventos">
      <h1>Eventos React</h1>
      <p>
        <button onClick={(e) => disteClick(e, "pablo")}>Clickeame</button>
      </p>
      <p>
        <button onDoubleClick={(e) => disteDobleClick(e, "santiago")}>
          Dame Doble Click
        </button>
      </p>
      <div
        id="caja"
        onMouseEnter={(e) => pasaste(e, "entrado")}
        onMouseLeave={(e) => pasaste(e, "salido")}
      >
        <p>Pasa por encima</p>
      </div>

      <p>
        <input
          type="text"
          onFocus={(e) => estasDentro(e)}
          onBlur={estasFuera}
          placeholder="Introduce tu nombre"
        />
      </p>
    </div>
  );
};
