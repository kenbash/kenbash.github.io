import React, { Component } from "react";
import { Link } from "react-router-dom";

class Chess extends Component {
  render() {
    return (
      <div className="chess">
        <div className="writeup-header" />
        <main className="writeup-main">
          <div className="container">
            <h1>Chess</h1>
            <Link to="/">Go Home</Link>
          </div>
        </main>
      </div>
    );
  }
}

export default Chess;
