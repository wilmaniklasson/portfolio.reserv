import React, { useState } from 'react';
import './project.css';
import Note from '../assets/Note.svg';
import Pokemon from '../assets/Pokemon.svg';
import Hangman from '../assets/Hangman.svg';
import Bättrewebb from '../assets/Bättrewebb.svg';



const Project = () => {
    return (
        <>
            <section className='Projects'>
                <h2>Några av mina Projekt</h2>
                <div className='project-container'>
                <div className='project'>
                    <div className='project-image'>
                        <a href="https://wilmaniklasson.github.io/Notes/" target="_blank" rel="noopener noreferrer">
                            <img src={Note} alt="En bild på webbappen Notes" />
                        </a>
                    </div>
                    <h3>Notes</h3>
                    <p>Skapa och ta bort anteckningar. Växla mellan mörkt och ljust läge. Sök anteckningar med sökfältet. Anteckningarna lagras lokalt i webbläsaren.</p>
                    <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/Notes" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/Notes/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>

                    </div>
                </div>
                    <div className='project'>
                    <div className='project-image'>
                    <a href="https://wilmaniklasson.github.io/Poke_manager/" target="_blank" rel="noopener noreferrer">
                        <img src={Pokemon} alt="En bild på webbappen Pokémon team manager" />
                        </a>
                    
                        </div>
                    
                        <h3>Pokémon team manager</h3>
                        <p>Sök efter Pokémon från ett externt API. Lägg till och ta bort Pokémon i ditt lag och flytta till reservlistan.</p>

                        <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/Poke_manager" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/Poke_manager/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>

                    </div>
                    </div>
                    <div className='project'>
                    <div className='project-image'>
                    <a href="https://wilmaniklasson.github.io/Hangman/" target="_blank" rel="noopener noreferrer">
                    <img src={Hangman} alt="En bild på webbappen Hangman" />
                        </a>
                    
                        </div>
                    
                        <h3>Hangman</h3>
                        <p>Ett grupparbete som kombinerar JavaScript, HTML och CSS.Klassiskt hänga gubbe spel som sparar spelarens resultat lokalt.</p>
                        <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/Hangman" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/Hangman/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>
                        </div>
                    </div>
                    <div className='project'>
                    <div className='project-image'>
                    <a href="https://wilmaniklasson.github.io/CreativeCodeNest/" target="_blank" rel="noopener noreferrer">
                    <img src={Bättrewebb} alt="En bild på webbappen Bättre webb" />
                    </a>
                        
                        </div>
                        <h3>Bättre Webb</h3>
                        <p>En webbplats för konferansen 'Bättre webb' som utvecklats med HTML och CSS som en del av den första kursen på min utbildning.</p>
                        <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/CreativeCodeNest" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/CreativeCodeNest/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>
                        </div>
                       
                    </div>
                </div>
               

            </section>
        </>
    );
}

export default Project;