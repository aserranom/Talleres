import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Vector({ vector }) {
  return (
    <div className="vector">
      {vector.map(cell => (
        <div className="cell" />
      ))}
    </div>
  );
}

function App({ name }) {
  const vector = Array(16).fill(false);
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <Vector vector={vector} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Álvaro" />, rootElement);
