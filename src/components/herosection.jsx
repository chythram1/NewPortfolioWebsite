import React, { useState, useEffect } from 'react';
import './herosection.css';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "Aspiring Software Engineer | AI/ML Enthusiast | Transdisciplinary Problem Solver";

  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (displayText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayText, isTyping]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="color-changing">Chythra Malapati</span>
          </h1>
          
          <p className="hero-tagline">
            {displayText}
            <span className={`cursor ${!isTyping ? 'blink' : ''}`}>|</span>
          </p>
          
          <div className="hero-nav">
            <a href="#projects" className="hero-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Portfolio
            </a>
            <a href="#experience" className="hero-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experience
            </a>
            <a href="#contact" className="hero-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
          </div>

          <a href="#projects" className="btn-primary">View Work</a>
        </div>

        <div className="hero-image">
          <div className="profile-ring">
            <div className="profile-inner">
              <img src="/projects/Emoji.png" alt="Chythra Malapati" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};