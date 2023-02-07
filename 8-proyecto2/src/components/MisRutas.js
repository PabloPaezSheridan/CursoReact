import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Portafolio } from "./Portafolio";
import { Servicios } from "./Servicios";
import { Curriculum } from "./Curriculum";
import { Contacto } from "./Contacto";
import { Footer } from "./layout/Footer";
import { HeaderNav } from "./layout/HeaderNav";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Navegacion */}
      <HeaderNav />
      {/* Contenido principal */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portfolio" element={<Portafolio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="*"
            element={
              <div className="page">
                <h1 className="heading">Error 404</h1>
              </div>
            }
          />
        </Routes>
      </section>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};
