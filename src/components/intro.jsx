import React, { useState } from 'react';
import './intro.css';
import avatarImg from '../assets/avatar.svg';
import githubImg from '../assets/Github.svg';
import linkedinImg from '../assets/LinkedIn.svg';

const Intro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    console.log('Hamburgermenu klickad!');
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <section className="intro">
        <section className="container">
          <div className="navbar-toggle" id="mobile-menu" onClick={handleMenuClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <aside className="navbar">
            <nav className="navigation-buttons" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
              <button className="button" id="about">OM MIG</button>
              <button className="button" id="projects">PROJEKT</button>
              <button className="button" id="cv">CV</button>
              <button className="button" id="english">English</button>
            </nav>
          </aside>

          <div className="main-content">
            <div className="text-content">
              <h1 className="greeting">Hej! <br /> mitt namn är</h1>
              <h2 className="name">Wilma</h2>
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
