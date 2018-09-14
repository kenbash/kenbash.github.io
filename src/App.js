import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="header-top">
            <h1 className="header-title">Ken Ashley</h1>
          </div>
        </header>
        <main className="app-main">
          <div className="container">
            <section className="intro">
              <h1>Welcome Text Here</h1>
              <p>
                I'm currently a senior at{" "}
                <a href="https://ucsd.edu">
                  University of California, San Diego
                </a>{" "}
                studying Mathematics - Computer Science. I also intern part time
                at <a href="https://www.hologic.com">Hologic, Inc.</a> building
                full-stack web applications with Angular & .NET Core. I love
                creating, designing, and solving problems.
              </p>
            </section>
            <section className="projects">
              <h2>Projects</h2>
              <div className="project-container">
                <Project
                  title="Test"
                  link="https://www.google.com"
                  pic="/assets/images/thumbnail_chess.PNG"
                  desc="Description here"
                />
                <Project
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
              </div>
            </section>
          </div>
        </main>
        <footer className="app-footer" />
      </div>
    );
  }
}

function Project(props) {
  return (
    <div className="project">
      <img src={props.pic} alt={props.title} />
      <a href={props.link}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </a>
    </div>
  );
}

export default App;
