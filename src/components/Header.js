import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'hackathons', 'articles', 'videos', 'skills', 'about', 'contacts'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <Logo />
          <span className="logo-text">belulok</span>
        </div>
        <nav className="nav-links">
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="hash">#</span>home
          </a>
          <a 
            href="#works" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            <span className="hash">#</span>works
          </a>
          <a 
            href="#hackathons" 
            className={`nav-link ${activeSection === 'hackathons' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hackathons');
            }}
          >
            <span className="hash">#</span>hackathons
          </a>
          <a 
            href="#articles" 
            className={`nav-link ${activeSection === 'articles' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('articles');
            }}
          >
            <span className="hash">#</span>articles
          </a>
          <a 
            href="#videos" 
            className={`nav-link ${activeSection === 'videos' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('videos');
            }}
          >
            <span className="hash">#</span>videos
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            <span className="hash">#</span>about-me
          </a>
          <a 
            href="#contacts" 
            className={`nav-link ${activeSection === 'contacts' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contacts');
            }}
          >
            <span className="hash">#</span>contacts
          </a>
          <div className="language-switcher">
            <span>EN</span>
            <div className="dropdown-arrow">▼</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;