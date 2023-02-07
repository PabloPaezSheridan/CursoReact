import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="home">
      <h1 className="heading">Bienvenidos</h1>
      <h5>
        Hola, soy Pablo Paez, ingeniero en sistemas y programador en PwC. Soy
        docente universitario en diversas catedras de programacion en la
        Universidad Austral y en la Universidad Tecnologica Nacional en la
        ciudad de Rosario, Argentina
      </h5>
      <p>
        Tengo experiencia como desarrollador backend en .Net framework y .Net
        Core asi como Python con Odoo Tambien estoy familiarizado con cloud
        computing teniendo la certificacion AZ900 de azure y habiendo trabajado
        en migracion de aplicaciones on premise a la nube He trabajado
        desarrollando, integrando y manteniendo diversas API asi como desarrollo
        full-stack de features y aplicaciones integrales en produccion y
        comercializadas Tengo capacidad de comunicarme naturalmente con el
        ingles habiendo trabajado en el mismo equipo con compañeros de Estados
        Unidos India y China.
      </p>

      <p>
        Si quieres contactar conmigo dirigete aqui.{" "}
        <Link to="/contacto">Contacto</Link>
      </p>

      <section className="last-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <div className="works"></div>
      </section>
    </div>
  );
};
