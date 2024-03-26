import React, { useState } from 'react';
import './intro.css';
import avatarImg from '../assets/avatar.svg';
import githubImg from '../assets/Github.svg';
import linkedinImg from '../assets/LinkedIn.svg';

const Intro = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="intro">
        <section className="container">
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
              <button className="button" id="english">English</button>
            </nav>
          </div>

          <div className="main-content">
            <div className="text-content">
              <h1 className="greeting" id='animated-text'>Hej! <br /> mitt namn är</h1>
              <h2 className="name" id='animate-me'>Wilma</h2>
            </div>
            <div className="profile-pic">
              <img src={avatarImg} alt="Wilma" />
            </div>
            <div className="speech-bubble">
              <div className="social-link">
                <a href="https://github.com/wilmaniklasson" target="_blank" rel="noopener noreferrer">
                  <img src={githubImg} alt="github knapp" id="github" />
                </a>
                <a href="https://www.linkedin.com/in/wilma-niklasson-5b3518192/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinImg} alt="LinkedIn knapp" id="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="description-section">
          <p className="description">Jag är driven, lösningorienterad och en skicklig facilitator som främjar samarbete och gemensam problemlösning i teamet.</p>
        </section>
      </section>
    </>
  );
}

export default Intro;
