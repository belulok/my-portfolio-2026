import React from 'react';
import Logo from './Logo';
import Dots from './Dots';
import './Hero.css';

// Using local image with cache busting
const heroImage = "/sebastian.png?v=" + Date.now();

const Hero = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          <span>I'm Sebastian, a </span>
          <span className="text-primary">full stack developer</span>
          <span> and </span>
          <span className="text-primary">AI engineer</span>
        </h1>
        
        <p className="hero-description">
          I create web applications and AI solutions that actually work
        </p>
        
        <button className="btn btn-primary" onClick={scrollToContacts}>
          Contact me!!
        </button>
      </div>
      
      <div className="hero-right">
        <Logo className="hero-logo" />
        <div className="hero-image">
          <img alt="Sebastian" src={heroImage} />
        </div>
        <Dots className="hero-dots" />
      </div>
      
      <div className="status-card">
        <div className="status-indicator"></div>
        <p className="status-text">
          <span className="status-label">Currently working on </span>
          <span className="status-project">WebMerger</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;