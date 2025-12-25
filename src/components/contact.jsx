import React from 'react';
import './contacts.css';

export const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">Open to opportunities and collaborations</p>
      </div>
      
      <div className="contact-buttons">
        <a href="mailto:your@email.com" className="btn-primary">Email Me</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
        <a href="https://github.com/chythram1" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
      </div>
    </section>
  );
};