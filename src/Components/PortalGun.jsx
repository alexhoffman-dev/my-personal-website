import React,{ useContext } from 'react';
import lightPortalGun from '../assets/light/portal-gun.png';
import darkPortalGun from '../assets/dark/PortalGun/portal-gun.png';
import { DarkModeContext } from "../App";

function PortalGun() {
    const rickAndMortyURL = 'https://github.com/alexhoffman-dev/Rick-And-Morty-App';
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <>
        <a href={ rickAndMortyURL } target='blank'>
            <img src={isDarkMode ? darkPortalGun : lightPortalGun } alt='Rick and Morty Local Favorites Project' id='portal-gun'></img>
        </a>
        </>
    )
}

export default PortalGun;

