import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let x = "x";
  x = "xx";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {x}
        </a>
      </header>
    </div>
  );
}

export default App;
