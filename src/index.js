import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App({ name }) {
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Álvaro" />, rootElement);
