import React from 'react';
import './logobar.css';

export const LogoBar = () => {
  const logos = [
    { name: 'Virginia Tech', img: '/logos/vt-logo.png' },
    { name: 'Indivior', img: '/logos/indivior_logo.png' },
    { name: 'Markel', img: '/logos/markel.svg' },
    { name: 'CoStar Group', img: '/logos/csg.png' },
    { name: 'Reestablish Richmond', img: '/logos/rr-establish.png' },
    { name: 'VCU', img: '/logos/vcu.png' },

  ];

  return (
    <div className="logo-bar">
      <div className="logo-bar-text">Trusted Contributor at</div>
      <div className="logo-track">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={`logo-1-${index}`} className="logo-icon-wrapper">
            <img
              src={logo.img}
              alt={logo.name}
              className="company-logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`logo-2-${index}`} className="logo-icon-wrapper">
            <img
              src={logo.img}
              alt={logo.name}
              className="company-logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
              
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`logo-2-${index}`} className="logo-icon-wrapper">
            <img
              src={logo.img}
              alt={logo.name}
              className="company-logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};
