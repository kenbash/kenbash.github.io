import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import cvmaze_maze_img from "../../assets/images/cvmaze_maze.PNG";
import cvmaze_img from "../../assets/images/thumbnail_cvmaze.PNG";
import cvmaze_win_img from "../../assets/images/cvmaze_win.PNG";

class CVMaze extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="CVMaze">
        <Header title="Computer Vision Maze" />
        <main className="writeup">
          <div className="container">
            <h2 className="writeup-top">Introduction</h2>

            <p>
              My friend and I created this project in the span of a few days to
              familiarize ourselves with simple computer vision. Our final
              product was a basic maze game that we could navigate by using the
              position of our hand. The game is written in Java, and launching
              the game will run a Python script that handles the computer vision
              input.
            </p>

            <a href="https//github.com/kenbash/CV-Maze">
              Source available here
            </a>

            <h2>Features</h2>

            <h3>Maze</h3>
            <img alt="Maze" src={cvmaze_maze_img} />
            <p>
              The game begins by randomly generating a maze using recursive
              backtracking. The goal is to get the spider to the bottom right
              corner and out of the maze by controlling which direction it
              moves. You can use the arrow keys to change the spider's
              direction.
            </p>

            <h3>Computer Vision</h3>
            <img alt="Computer Vision" src={cvmaze_img} />
            <p>
              The computer vision aspect of this project works by reading input
              from a webcam. The program then looks for the largest group of
              skin-colored pixels it can find, and draws a red bounding
              rectangle around it. The program is currently calibrated for
              lighter skin colors, although it is possible to adjust. When the
              center of a bounding rectangle is inside one of the blue
              rectangles, an arrow key is output for the corresponding
              direction.
            </p>

            <h3>Winning</h3>
            <img alt="Win" src={cvmaze_win_img} />
            <p>
              When the spider attempts to move out of the maze, a message will
              be shown indicating a win. After a few seconds, the game will
              reset with a new maze to play again.
            </p>

            <h2>How to Run</h2>

            <p>
              To run, simply launch the Run.jar file located in the Run folder.
            </p>
            <p>
              For the Python script to work, you will need simpleCV and
              PyAutoGUI installed as dependencies.
            </p>
            <p>
              Additionally, the game window must be focused for the arrow key
              outputs to be registered. On Mac, you can simply select the
              window, but for windows I had to add a simple workaround that
              clicks the screen before every output. Simply move the cursor over
              the game window to play.
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

export default CVMaze;
