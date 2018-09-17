import React, { Component } from "react";
import { Link } from "react-router-dom";

class DejaPhoto extends Component {
  render() {
    return (
      <div className="dejaphoto">
        <div className="writeup-header" />
        <main className="writeup-main">
          <div className="container">
            <h1>DejaPhoto</h1>
            <Link to="/">Go Home</Link>
          </div>
        </main>
      </div>
    );
  }
}

export default DejaPhoto;
