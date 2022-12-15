import logo from "./logo.svg";
import "./App.css";
import { PruebasComponents } from "./components/PruebasComponents";
import { AjaxComponents } from "./components/AjaxComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebasComponents />
        <hr/>
        <AjaxComponents />
      </header>
    </div>
  );
}

export default App;
