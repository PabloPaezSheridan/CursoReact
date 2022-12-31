import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export const PanelControl = () => {
  return (
    <>
      <h1>PanelControl</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/panel/Inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/panel/Crear">Crear Articulos</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};
