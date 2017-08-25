---
layout: default
permalink: /projects/chess
title: Chess
---
## Introduction

This was my first programming project that I wrote while learning Java. My goal
was to make a fully playable, intuitive chess game for local multiplayer. After
completing the game, I made a very simple AI as a fun addition to the project.

**[Source available here](http://github.com/kashley920/Chess-Game)**

## Features
### Game Board

![Game Board](/assets/images/chess01.PNG)  
Here is what the main gameboard looks like. Players take turns moving their pieces,
starting with white.

![Movement Example](/assets/images/thumbnail_chess.PNG)  
To move a piece, simply click it and yellow boxes will highlight what squares the
piece can move to, along with the piece itself. All possible movements for a piece
are given, including more complex movements like castling and _en passant_.

You can click any of the squares to move to it and complete your turn, or click the piece
again to deselect it.

### Check System
![Check Example](/assets/images/chess02.PNG)  
When the player is in check, only moves that are legal will be highlighted in yellow.
That is, if a move will get your king out of check, that move may be selected.

![Check Example](/assets/images/chess03.PNG)  
If a move is not legal, meaning your king will be in check after the move, the square
will be highlighted with red and be blocked from movement.

### Winning
![Win Example](/assets/images/chess04.PNG)  
When the game detects that no moves can be made to get out of check, the other
color is declared the winner. There is also a system in place to detect stalemates.
To play again, one must close the game and reopen it.

### AI
I created a simple AI as a separate game mode. In this, the player plays as white and
the AI as black. Each turn, the AI will try to put the player in check. If it can not,
it will perform a random move. This AI is obviously not designed to beat anybody, but
was a neat feature to add to the program.

## How to Run
This program has no dependencies and the compiled files are already included. Therefore,
it can easily be run as follows.

### Default
`java Chess`

### AI
`java ChessAI`
