import React, { Component } from "react";
import "./home.css";
import asdf from "../../assets/images/thumbnail_chess.PNG";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <div className="header-top">
            <h1 className="header-title">Ken Ashley</h1>
          </div>
        </div>
        <main className="home-main">
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
                  img={asdf}
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  img={asdf}
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  img={asdf}
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  img={asdf}
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  img={asdf}
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
                <Project
                  img={asdf}
                  title="Test"
                  link="https://www.google.com"
                  desc="Description here"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

function Project(props) {
  return (
    <div className="project">
      <img src={props.img} alt={props.title} />
      <a className="project-desc" href={props.link}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </a>
    </div>
  );
}

export default Home;
