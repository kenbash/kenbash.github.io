import React, { Component } from "react";
import "./home.css";
import chess_img from "../../assets/images/thumbnail_chess.PNG";
import cvmaze_img from "../../assets/images/thumbnail_cvmaze.PNG";
import dejaphoto_img from "../../assets/images/thumbnail_dejaphoto.png";
import platformingai_img from "../../assets/images/thumbnail_platformingai.PNG";

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
              <h1>About Me</h1>
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
                  img=""
                  title="Chat Analyzer"
                  link="/chat-analyzer"
                  desc="A web app for analyzing Facebook chat conversations."
                />
                <Project
                  img={dejaphoto_img}
                  title="Deja Photo"
                  link="/dejaphoto"
                  desc="Android app that changes phone wallpaper according to current location, 'karma', and more.
                  Implements a friends list for users to share photos with each other.
                  Developed in a team of 6."
                />
                <Project
                  img={platformingai_img}
                  title="Platforming AI"
                  link="https://github.com/kenbash/Platforming-AI"
                  desc="Simple platforming game in Python, played by an AI bot that learns through neuroevolution.
                  Work in progress/abandoned."
                />
                <Project
                  img={cvmaze_img}
                  title="Computer Vision Maze"
                  link="/cvmaze"
                  desc="Simple maze game where the player controls their character with their hand."
                />
                <Project
                  img=""
                  title="Image Clusterer"
                  link="https://github.com/kenbash/Image-Clusterer"
                  desc="Simple program that uses Spark k-means clustering to cluster an image using its pixel's RGB values"
                />
                <Project
                  img={chess_img}
                  title="Chess"
                  link="/chess"
                  desc="Fully playable chess game written in Java.
                  Also has a simple AI for single player play.
                  Developed as a fun project in high school while learning how to code."
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
