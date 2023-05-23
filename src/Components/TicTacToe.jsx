import React, { useState, useContext } from "react";
import lightGame from "../assets/light/TicTacToe/inprogressgame.png";
import lightNewGame from "../assets/light/TicTacToe/newgame-4.png";
import darkGame from "../assets/dark/TicTacToe/default-game.png";
import darkNewGame from "../assets/dark/TicTacToe/on-hover-game.png";
import { DarkModeContext } from "../App";

function TicTacToe() {
  const [isMouseHovering, setMouseIsHovering] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  function imageSourceSelect() {
    return isDarkMode
      ? isMouseHovering
        ? darkNewGame
        : darkGame
      : isMouseHovering
      ? lightNewGame
      : lightGame;
  }

  return (
    <a href="https://github.com/alexhoffman-dev/tic-tac-toe-react" target='blank'>
      <div
      onMouseEnter={() => {
        setMouseIsHovering(true);
      }}
      onMouseLeave={() => {
        setMouseIsHovering(false);
      }}
    >
      <img src={imageSourceSelect()} alt="project-overflow" id="tic-tac-toe" />
    </div>
    </a>
  );
}

export default TicTacToe;
