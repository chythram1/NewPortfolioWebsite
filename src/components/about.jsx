import React from 'react';
import './about.css';

export const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="about-content">
          <p className="about-lead">
            I'm a junior studying Computer Science at Virginia Tech. I am passionate about applying software engineering, data-driven insights, and AI to solve real-world problems and improve system efficiencies.
          </p>
          
          <p className="about-text">
            As a conference-published co-author and previous intern at three companies, I have extensive, multidisciplinary experience working in both academic and real-world technical environments.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Internships</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">1</span>
              <span className="highlight-label">Publication</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">4+</span>
              <span className="highlight-label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};