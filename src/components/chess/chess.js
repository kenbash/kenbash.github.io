import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import chess01_img from "../../assets/images/chess01.PNG";
import chess02_img from "../../assets/images/chess02.PNG";
import chess03_img from "../../assets/images/chess03.PNG";
import chess04_img from "../../assets/images/chess04.PNG";
import chess_img from "../../assets/images/thumbnail_chess.PNG";

class Chess extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="chess">
        <Header title="Chess" />
        <main className="writeup">
          <div className="container">
            <h2 className="writeup-top">Introduction</h2>

            <p>
              This was my first programming project that I wrote while learning
              Java. My goal was to make a fully playable, intuitive chess game
              for local multiplayer. After completing the game, I made a very
              simple AI as a fun addition to the project.
            </p>

            <a href="https://github.com/kenbash/Chess-Game">
              Source available here
            </a>

            <h2>Features</h2>

            <h3>Game Board</h3>
            <img alt="Game Board" src={chess01_img} />
            <p>
              Here is what the main gameboard looks like. Players take turns
              moving their pieces, starting with white.
            </p>

            <img alt="Movement Example" src={chess_img} />
            <p>
              To move a piece, simply click it and yellow boxes will highlight
              which squares the piece can move to, along with the piece itself.
              All possible movements for a piece are given, including more
              complex movements like castling and <i>en passant</i>. You can
              click any of the squares to move to it and complete your turn, or
              click the piece again to deselect it.
            </p>

            <h3>Check System</h3>
            <img alt="Check Example" src={chess02_img} />
            <p>
              When the player is in check, only moves that are legal will be
              highlighted in yellow. That is, if a move will get your king out
              of check, that move may be selected.
            </p>

            <img alt="Check Example" src={chess03_img} />
            <p>
              If a move is not legal, meaning your king will be in check after
              the move, the square will be highlighted with red and be blocked
              from movement.
            </p>

            <h3>Winning</h3>
            <img alt="Win Example" src={chess04_img} />
            <p>
              When the game detects that no moves can be made to get out of
              check, the other color is declared the winner. There is also a
              system in place to detect stalemates. To play again, one must
              close the game and reopen it.
            </p>

            <h3>AI</h3>
            <p>
              I created a simple AI as a separate game mode. In this, the player
              plays as white and the AI as black. Each turn, the AI will try to
              put the player in check. If it can not, it will perform a random
              move. This AI is obviously not designed to beat anybody, but was a
              neat feature to add to the program.
            </p>

            <h2>How to Run</h2>

            <p>
              This program has no dependencies and the compiled files are
              already included. Therefore, it can easily be run as follows.
            </p>

            <h3>Default</h3>
            <p>
              <code>java Chess</code>
            </p>

            <h3>AI</h3>
            <p>
              <code>java ChessAI</code>
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

export default Chess;
