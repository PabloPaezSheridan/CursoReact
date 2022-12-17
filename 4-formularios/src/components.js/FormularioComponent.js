import React, { useState } from "react";

export const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});
  const conseguirDatosFormulario = (e) => {
    e.preventDefault();
    let usuario = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      genero: e.target.genero.value,
      biografia: e.target.biografia.value,
      enviar: e.target.enviar.value,
    };
    console.log(usuario);
    setUsuario(usuario);
  };

  const cambiarDatos = (e) => {
    let name_del_input = e.target.name;
    //let usuario_para_modificar = usuario;
    //usuario_para_modificar[name_del_input] = e.target.value;
    setUsuario((estadoPrevio) => ({
      ...estadoPrevio,
      [name_del_input]: e.target.value,
    }));
  };
  return (
    <div>
      <h1>Formularios con React</h1>
      {usuario.enviar && (
        <div className="info-usuario label label-form">
          {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su
          biografia es {usuario.biografia}
        </div>
      )}
      <form onSubmit={conseguirDatosFormulario}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          required
          onChange={cambiarDatos}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          required
          onChange={cambiarDatos}
        />
        <select name="genero" onChange={cambiarDatos}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea
          placeholder="Biografia"
          name="biografia"
          onChange={cambiarDatos}
        ></textarea>
        <input
          type="submit"
          value="Enviar"
          onChange={cambiarDatos}
          name="enviar"
        ></input>
      </form>
    </div>
  );
};
