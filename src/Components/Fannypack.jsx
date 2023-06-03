import React, { useState, useContext } from "react";
import lightFannypack from "../assets/light/fannypack/fanny-no-hover.png";
import lightFannypackHighlight from "../assets/light/fannypack/highlighted-fanny.png";
import darkFannyPack from "../assets/dark/fannypack/dark-fanny.png";
import darkFannypackHighlight from "../assets/dark/fannypack/ranbow-highlight.png";
import { DarkModeContext } from "../App";

function Fannypack() {
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  function chooseImageSource() {
    if (isDarkMode && isMouseHovering) {
      return darkFannypackHighlight;
    } else if (isDarkMode) {
      return darkFannyPack;
    } else if (!isDarkMode && isMouseHovering) {
      return lightFannypackHighlight;
    } else {
      return lightFannypack;
    }
  }

  return (
    <div
      onMouseEnter={() => {
        setIsMouseHovering(true);
      }}
      onMouseLeave={() => {
        setIsMouseHovering(false);
      }}
    >
      <a href='https://github.com/alexhoffman-dev/to-do-list' target='blank'><img
        src={chooseImageSource()}
        alt="project-overflow-container"
        id={isDarkMode ? "dark-fannypack" : "fannypack"}
      /></a>
    </div>
  );
}

export default Fannypack;
