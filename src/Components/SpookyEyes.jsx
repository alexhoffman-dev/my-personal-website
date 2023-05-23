import React, { useState, useEffect } from "react";
import spookyEyes from "../assets/light/blinking-eyes/eyes.svg";

function SpookyEyes() {
  const [visible, setVisible] = useState(true);
  const opacity = visible ? 1 : 0;
  const transition = "opacity 0.5s ease-in-out";
  const style = { opacity, transition };

  function toggleVisibility() {
    setVisible((prevVisible) => !prevVisible);
  }

  // useEffect hook employed to turn blinking eyes on and off every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(toggleVisibility, 3000);
    // prevent multiple intervals from being set
    return () => clearInterval(intervalId);
  }, []);

  return (
    <img
      src={spookyEyes}
      alt="Spooky blinking eyes detail"
      id="spooky-eyes"
      style={style}
    />
  );
}

export default SpookyEyes;
