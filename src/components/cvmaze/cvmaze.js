import React, { Component } from "react";
import { Link } from "react-router-dom";

class CVMaze extends Component {
  render() {
    return (
      <div className="writeup cvmaze">
        <div className="container">
          <h1>Computer Vision Maze</h1>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    );
  }
}

export default CVMaze;
