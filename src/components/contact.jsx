import React from 'react';
import './contacts.css';

const currentSong = {
  title: "Entropy",
  artist: "Daniel Caesar",
  albumArt: "https://lastfm.freetls.fastly.net/i/u/ar0/f4c1af13e288af5f42a9064a23674b4f.jpg",
  spotifyUrl: "https://open.spotify.com/track/795p3jKj5stjPf8IFpZkdD" // Update with actual link
};

export const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Open to opportunities and collaborations</p>
        </div>
        
        <div className="contact-content">
          {/* Left side - Contact buttons */}
          <div className="contact-left">
            <div className="contact-buttons">
              <a href="mailto:your@email.com" className="btn-primary">Email Me</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
              <a href="https://github.com/chythram1" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
            </div>
          </div>

          {/* Right side - Spotify */}
          <div className="contact-right">
            <h3 className="spotify-title">
              <svg className="spotify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Currently Loving
            </h3>
            
            <a 
              href={currentSong.spotifyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="spotify-card"
            >
              <div className="album-art">
                <img src={currentSong.albumArt} alt={currentSong.title} />
                <div className="play-overlay">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="song-info">
                <span className="song-title">{currentSong.title}</span>
                <span className="song-artist">{currentSong.artist}</span>
              </div>
              <div className="equalizer">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};