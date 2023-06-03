import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./menu.css";
import Modal from "react-modal";

function SlideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}>
        <div className="menu-item" onClick={openModal}>
          About
        </div>
        <a className="menu-item" href="https://github.com/alexhoffman-dev" target="blank">
          Projects
        </a>
        <a className="menu-item" href="https://www.linkedin.com/in/alex-hoffman-89b86a237/" target="blank">
          Contact
        </a>
      </Menu>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="custom-modal" overlayClassName="custom-overlay">
        <h2>ABOUT</h2>
        <div id='modal-content'>
          <hr style={{width: '70%'}}></hr>
          <p>Welcome to Alex Hoffman's Portfolio Site!</p>
          <br/>
          <p>All of the visual contents of this website were hand-drawn as an opportunity to showcase my personal taste in design and to allow a playful approach to showcasing the FrontEnd work I've completed. Each shelved item represents a project in my journey towards teaching myself web development skills. Each item links to their respective GitHub repositories and have thematically appropriate hover animations.</p>
          <br/>
          <hr style={{width: '70%'}}></hr>
          <p style={{fontWeight: 'bold'}}>Please feel free to stay a while and I hope you enjoy your visit! </p>
          <span onClick={closeModal} label='Close Modal'>X</span>
        </div>
      </Modal>
    </>
  );
}

export default SlideMenu;
