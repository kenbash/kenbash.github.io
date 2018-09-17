import React, { Component } from "react";
import { Link } from "react-router-dom";

class CVMaze extends Component {
  render() {
    return (
      <div className="cvmaze">
        <div className="writeup-header" />
        <main className="writeup-main">
          <div className="container">
            <h1>Computer Vision Maze</h1>
            <Link to="/">Go Home</Link>
          </div>
        </main>
      </div>
    );
  }
}

export default CVMaze;
