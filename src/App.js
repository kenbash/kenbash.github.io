import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ChatAnalyzer from "./components/chat-analyzer/ChatAnalyzer";
import Chess from "./components/chess/Chess";
import CVMaze from "./components/cvmaze/CVMaze";
import DejaPhoto from "./components/dejaphoto/DejaPhoto";
import NotFound from "./components/not-found/NotFound";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat-analyzer" component={ChatAnalyzer} />
        <Route exact path="/chess" component={Chess} />
        <Route exact path="/cvmaze" component={CVMaze} />
        <Route exact path="/dejaphoto" component={DejaPhoto} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
