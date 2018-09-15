import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
        <footer className="app-footer" />
      </div>
    );
  }
}

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
      </div>
    );
  }
}

export default App;
