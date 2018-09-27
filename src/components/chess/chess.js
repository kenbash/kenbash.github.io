import React, { Component } from "react";
import { Link } from "react-router-dom";

class Chess extends Component {
  render() {
    return (
      <div className="writeup chess">
        <div className="container">
          <h1>Chess</h1>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    );
  }
}

export default Chess;
