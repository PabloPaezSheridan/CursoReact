import logo from "./logo.svg";
import "./App.css";
import { MiPrimerEstado } from "./components/MiPrimerEstado";
import { Año } from "./components/Año";

function App() {
  let anioActual = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado de react - Hook useState</h1>
        <MiPrimerEstado />
        <br/>
        <hr />
        <Año año={anioActual} />
      </header>
    </div>
  );
}

export default App;
