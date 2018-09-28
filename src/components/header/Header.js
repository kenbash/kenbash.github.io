import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-top">
          <h1 className="header-title">{this.props.title}</h1>
        </div>
      </header>
    );
  }
}

export default Header;
