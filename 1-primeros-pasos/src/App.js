import logo from "./logo.svg";
import "./App.css";
import { ListarLibros } from "./ListarLibros";
import { DatosUsuario } from "./DatosUsuarios";
import { TerecerComponente } from "./TerecerComponente";
import { EventosComponente } from "./EventosComponente";

function App() {
  const ficha_medica = {
    altura: 1.6,
    grupo: "A-",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido al master de react!</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="componentes">
          <hr />
          <EventosComponente />
          <hr />
          <ListarLibros />
          <hr />
          <DatosUsuario />
          <hr />
          <TerecerComponente
            altura={ficha_medica.altura}
            grupo={ficha_medica.grupo}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
