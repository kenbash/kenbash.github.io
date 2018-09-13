import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ken Ashley</h1>
        </header>
        <main className="App-main">
          <p>Currently rebuilding with React!</p>
          <img src={logo} className="App-logo" alt="logo" />
        </main>
        <footer className="App-footer" />
      </div>
    );
  }
}

export default App;
