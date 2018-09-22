import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChatAnalyzer extends Component {
  render() {
    return (
      <div className="chess">
        <div className="writeup-header" />
        <main className="writeup-main">
          <div className="container">
            <p>Coming soon!</p>
            <p>
              Check the current progress <a href="">here</a>
            </p>
            <Link to="/">Go Home</Link>
          </div>
        </main>
      </div>
    );
  }
}

export default ChatAnalyzer;
