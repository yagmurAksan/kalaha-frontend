# Kalaha Game Project #

## Technology Stack ##
This project has both backend and frontend as a separate project.

IntelliJ IDEA is used as IDE for both of the projects.

For the frontend, I use React 18.2 and Material UI Library.


## Project Architecture ##
For the frontend, I separate components as I can. There are 4 components:
+ BigPit is for showing big pits of the players with the stone numbers.
+ Button is for making the little pits clickable and so sowable.
+ Game is a main component of the frontend project.
+ Information for showing the turn of the players and the result of the game as a winner player.
+ LittlePit is for showing little pits of the players with the stone numbers.
+ Player is for showing the side of the players on the board.

I also use some config files:
+ axiosConfig for setting the base url of the server.
+ config for constant values.