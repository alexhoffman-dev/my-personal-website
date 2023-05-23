import React, { useState, useContext } from 'react';
import lightDefaultPlanetarium from '../assets/light/planetarium/default-planets.png';
import lightAlternatePlanetarium from '../assets/light/planetarium/alternate-planets.png';
import darkDefaultPlanetarium from '../assets/dark/planetarium/default-planets.png';
import darkAlternatePlanetarium from '../assets/dark/planetarium/alternate-planets.png';
import { DarkModeContext } from "../App";



function Planetarium() {
  const [ mouseIsHovering, setMouseIsHovering] = useState(false); 
  const { isDarkMode } = useContext(DarkModeContext);
  
  function designateImageSource() {
    if(isDarkMode) {
      if(mouseIsHovering) {
        return darkAlternatePlanetarium
      } else {return darkDefaultPlanetarium}
    } else if (mouseIsHovering) {
      return lightAlternatePlanetarium
    } else { return lightDefaultPlanetarium}
  };
  return (
      <div onMouseEnter={() => {
          setMouseIsHovering(true);
        }}
        onMouseLeave={() => {
          setMouseIsHovering(false);
        }}>
          <a href='https://github.com/alexhoffman-dev/sunshine-app-react' target='blank'><img src={ designateImageSource() } alt='Rick and Morty Local Favorites Project' id={isDarkMode ? 'dark-planetarium' : 'planetarium'} /></a>
      </div>
  )
}

export default Planetarium;
