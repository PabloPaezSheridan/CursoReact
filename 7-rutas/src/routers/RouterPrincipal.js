import React from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Contacto } from "../components/Contacto";
import { Articulos } from "../components/Articulos";
import { Inicio } from "../components/Inicio";
import { Persona } from "../components/Persona";
import { PanelControl } from "../components/PanelControl";
import { InicioPanel } from "../components/panel/InicioPanel";
import { Crear } from "../components/panel/Crear";
export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/panel"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Panel de control
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/persona/:apellido/:nombre" element={<Persona />} />
        <Route path="/persona/:apellido" element={<Persona />} />
        <Route path="/redirigir" element={<Navigate to="/inicio" />} />
        <Route path="/panel/*" element={<PanelControl />}>
          <Route index element={<InicioPanel />} />
          <Route path="inicio" element={<InicioPanel />} />
          <Route path="crear" element={<Crear />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <h1>Error 404</h1>
              <strong>Esta pagina no existe</strong>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
