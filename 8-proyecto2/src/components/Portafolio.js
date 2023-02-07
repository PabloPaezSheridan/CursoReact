import React from "react";
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";

export const Portafolio = () => {
  return (
    <div className="portfolio">
      <h1 className="heading">Portfolio</h1>
      <section className="works">
        {trabajos.map((trabajo) => {
          return (
            <article key={trabajo.id} className="work-item">
              <h2>{trabajo.nombre}</h2>
              <div className="mask">
                <img src={"/images/" + trabajo.id + ".png"} />
              </div>
              <span>{trabajo.categorias}</span>
              <p>{trabajo.descripcion}</p>
              <h3>{trabajo.tecnologias}</h3>
              <a href={"https://" + trabajo.dominio} target="_blank">
                {trabajo.nombre}
              </a>
            </article>
          );
        })}
      </section>
    </div>
  );
};
