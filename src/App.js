import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Chess from "./components/chess/chess";
import CVMaze from "./components/cvmaze/cvmaze";
import DejaPhoto from "./components/dejaphoto/dejaphoto";
import TempApp from "./components/tempApp/tempApp";
import NotFound from "./components/not-found/NotFound";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chess" component={Chess} />
        <Route exact path="/cvmaze" component={CVMaze} />
        <Route exact path="/dejaphoto" component={DejaPhoto} />
        <Route exact path="/tempApp" component={TempApp} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
