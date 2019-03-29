import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Subtitle() {
  return <h2>Start editing to see some magic happen!</h2>;
}

function Vector({ vector }) {
  return <div>{JSON.stringify(vector)}</div>;
}

function App({ name }) {
  const vector = [0, 0, 0, 0, 0];
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <Subtitle />
      <Vector vector={vector} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Álvaro" />, rootElement);
