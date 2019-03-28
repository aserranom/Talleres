import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Subtitle() {
  return <h2>Start editing to see some magic happen!</h2>;
}

function App({ name }) {
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <Subtitle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Álvaro" />, rootElement);
