import React from 'react';
import './intro.css';
import avatarImg from '../assets/avatar.svg';
import githubImg from '../assets/Github.svg';
import linkedinImg from '../assets/LinkedIn.svg';


const Intro = () => {
  return (
    <>
      <section className="intro">
        <section className="container">
        <aside className="sidebar">
            <button className="button" id="about">OM MIG</button>
            <button className="button" id="projects">PROJEKT</button>
            <button className="button" id="cv">CV</button>
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
