import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.js";
import ChatAnalyzer from "./components/chat-analyzer/chat-analyzer.js";
import Chess from "./components/chess/chess.js";
import CVMaze from "./components/cvmaze/cvmaze.js";
import DejaPhoto from "./components/dejaphoto/dejaphoto.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat-analyzer" component={ChatAnalyzer} />
          <Route exact path="/chess" component={Chess} />
          <Route exact path="/cvmaze" component={CVMaze} />
          <Route exact path="/dejaphoto" component={DejaPhoto} />
          <Route path="/" component={NotFound} />
        </Switch>
        <footer className="app-footer">
          <a href="https://www.linkedin.com/in/ken-ashley/">LinkedIn</a>
          <a href="https://github.com/kenbash">GitHub</a>
          <a href="https://github.com/kenbash/kenbash.github.io">Source</a>
        </footer>
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
