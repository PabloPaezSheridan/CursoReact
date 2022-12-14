import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";
import { Crear } from "./components/Crear";
import { useState } from "react";

function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis pelis</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>
      <section className="content">
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>
      </section>
      <aside className="lateral">
        <Buscador setListadoState={setListadoState}/>
        <Crear setListadoState={setListadoState}/>
      </aside>
      <footer className="footer">
        &copy; Master en React por
        <a href="https://www.victorrobles.es">Victor Robles </a>
      </footer>
    </div>
  );
}

export default App;
