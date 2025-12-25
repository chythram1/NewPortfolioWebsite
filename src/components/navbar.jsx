import React from 'react';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="gradient-text">Chythra Malapati</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};