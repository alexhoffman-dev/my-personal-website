import './App.css';
import React, { useState, createContext } from 'react';
import lightBackground from './assets/light/light-mode-no-items.jpg'; 
import darkBackground from './assets/dark/dark-mode-no-items.jpg'
import PortalGun from './Components/PortalGun';
import Planetarium from './Components/Planetarium';
import Pokeball from './Components/Pokeball'; 
import Fannypack from './Components/Fannypack';
import TicTacToe from './Components/TicTacToe';
import SpookyEyes from './Components/SpookyEyes';
import snoozingDetail from './assets/dark/Z/z-s.svg';
import lightWallpaper from './assets/light/website-background.png';
import darkWallpaper from './assets/dark/website-dark-wallpaper.png';
import Menu from './Components/SlideMenu';

const DarkModeContext = createContext();

function App() {
  const userMode = JSON.parse(window.localStorage.getItem("DARK MODE")) ?? false;
  const [ isDarkMode, setIsDarkMode ] = useState(userMode);
  const wallpaper = isDarkMode ? darkWallpaper : lightWallpaper; 

  function handleClick(event) {
    // early return to prevent undefined value from being saved via event propigation
    if (event.target.checked === undefined){
      return }; 
    window.localStorage.setItem("DARK MODE", JSON.stringify(event.target.checked)); 
    setIsDarkMode(!isDarkMode); 
  }
  
  return (
    <>
    <Menu/>
    <div className='parent-background' style={{backgroundImage: `url(${wallpaper})`}}>
      <DarkModeContext.Provider value={ {isDarkMode} }>
      <span/>
      <div className='absolute-container'>
        <img src={isDarkMode ? darkBackground : lightBackground} alt='light-mode-room' className='light-mode' id='background-image'></img>
        <PortalGun/>
        <Planetarium/>
        <Pokeball/>
        <Fannypack/>
        <TicTacToe/>
        <SpookyEyes/>
        <img src={ snoozingDetail } alt='Let sleeping dogs lie' id='snoozing'></img>
        <div id='light-switch' onClick={ handleClick }>
            <label className="switch">
                <input type="checkbox" defaultChecked={isDarkMode} />
                <span className="slider round"></span>
            </label>
        </div>
      </div>
      <span/>
    </DarkModeContext.Provider>
    </div>
    </>
  )
}

export { App, DarkModeContext};