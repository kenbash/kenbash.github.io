import React, { Component } from "react";
import "./NotFound.css";
import Footer from "../footer/Footer";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <header />
        <main>
          <h1>404</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
