import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ChatAnalyzer.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class ChatAnalyzer extends Component {
  render() {
    return (
      <div className="chat-analyzer">
        <Header title="Coming Soon" />
        <main className="chat-analyzer-main writeup">
          <div className="container">
            <p>
              Check the current progress{" "}
              <a href="https://github.com/kenbash/Chat-Analyzer">here</a>
            </p>
            <Link className="writeup-home-link" to="/">
              <p>Return Home</p>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ChatAnalyzer;
