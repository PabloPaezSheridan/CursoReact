import React, { useEffect, useState } from "react";

export const AjaxComponents = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 7,
        email: "pablo.lawson@reqres.in",
        first_name: "Pablo",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "juan.ferguson@reqres.in",
        first_name: "Juan",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "roman.funke@reqres.in",
        first_name: "Roman",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultado_final) => {
          setUsuarios(resultado_final.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuariosAjaxAw = () => {
    setTimeout(async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await response.json();
        setUsuarios(data);
        setCargando(false);
      } catch (error) {
        console.log("hola " + error.message);
        setErrores(error.message);
      }
    }, 2000);
  };

  useEffect(() => {
    getUsuariosAjaxAw();
  }, []);

  if (errores !== "") {
    return <div className="errores">{errores}</div>;
  } else if (cargando === true) {
    return <div className="cargando">Cargando datos...</div>;
  } else if (cargando === false && errores === "") {
    return (
      <div>
        <h2>Listado de usuarios via ajax</h2>
        <ol className="usuarios">
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} width="20" />
                &nbsp;
                {usuario.first_name} {usuario.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};
