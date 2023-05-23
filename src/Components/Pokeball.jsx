import React, { useContext } from 'react';
import lightMasterball from '../assets/light/masterball.png';
import darkMasterball from '../assets/dark/masterball.png';
import { DarkModeContext } from "../App";

function Pokeball() {
    const pokedexURL = 'https://github.com/alexhoffman-dev/Pokedex_challenge'; 
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <>
        <a href={pokedexURL} target='blank'>
            <img src={ isDarkMode ? darkMasterball : lightMasterball } alt='pokedex project' id={ isDarkMode ? 'dark-pokeball' : 'pokeball'  }></img>
        </a>
        </>
    )

}

export default Pokeball; 