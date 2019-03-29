import React, { Component } from "react";
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

class App extends Component {
  render() {
    const vector = Array(16).fill(false);
    return (
      <div className="App">
        <h1>Hello {this.props.name}</h1>
        <Vector vector={vector} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Álvaro" />, rootElement);
