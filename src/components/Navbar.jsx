import React, { useState } from 'react';
import './intro.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} id="mobile-menu" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'rotate-forward' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'fade-out' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'rotate-backward' : ''}`}></span>
      </div>
      <nav className={`navigation-buttons ${isMenuOpen ? 'open' : ''}`}>
        <button className="button" id="about">OM MIG</button>
        <button className="button" id="projects">PROJEKT</button>
        <button className="button" id="cv">CV</button>
        <button className="button" id="english">ENGLISH</button>
      </nav>
    </div>
  );
}

export default Navbar;
