import React, { useState, useEffect } from 'react';
import './herosection.css';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Software Engineer | AI/ML Enthusiast | Transdisciplinary Problem Solver";

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
        <div className="hero-content">
          <h1 className="hero-main-title">
            <span className="title-part">Hi, I'm </span>
            <span className="title-highlight">Chythra Malapati</span>
          </h1>

          <p className="hero-subtitle">
            An Aspiring Software Engineer passionate about AI-driven solutions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary-hero">
              Contact Me
            </a>
            <a href="#experience" className="btn-secondary-hero">
              Experience
            </a>
          </div>
        </div>
      </div>

      <div className="curtain-effect"></div>
    </section>
  );
};