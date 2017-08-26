---
layout: default
permalink: /projects/cvmaze
title: Computer Vision Maze Game
---
## Introduction

My friend and I created this project in the span of a few days to familiarize ourselves with
simple computer vision. Our final product was a basic maze game that we could navigate
by using the position of our hand. The game is written in Java, and launching the game
will run a Python script that handles the computer vision input.

**[Source available here](http://github.com/kashley920/CV-Maze)**

## Features

### Maze
![Maze](/assets/images/cvmaze_maze.PNG)  
The game begins by randomly generating a maze using recursive backtracking. The goal is
to get the spider to the bottom right corner and out of the maze by controlling which
direction it moves. You can use the arrow keys to change the spider's direction.

### Computer Vision
![Computer Vision](/assets/images/thumbnail_cvmaze.PNG)  
The computer vision aspect of this project works by reading input from a webcam. The
program then looks for the largest group of skin-colored pixels it can find, and draws
a red bounding rectangle around it. The program is currently calibrated for lighter
skin colors, although it is possible to adjust. When the center of a bounding rectangle
is inside one of the blue rectangles, an arrow key is output for the corresponding direction.

### Winning
![Win](/assets/images/cvmaze_win.PNG)  
When the spider attempts to move out of the maze, a message will be shown indicating a
win. After a few seconds, the game will reset with a new maze to play again.

## How to Run
To run, simply launch the Run.jar file located in the Run folder.  

For the Python script to work, you will need simpleCV installed as a dependency.  

Additionally, the game window must be focused for the arrow key outputs to be registered.
On Mac, you can simply select the window, but for windows I had to add a simple workaround that
clicks the screen before every output. Simply move the cursor over the game window to play.
