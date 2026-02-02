import React from 'react';
import { FaGithub, FaFigma, FaDiscord, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';
import './Footer.css';

// Using the asset URLs from Figma
const lineImage = "https://www.figma.com/api/mcp/asset/79cc1c87-ca9c-4267-9ef7-64d307c9f458";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line">
        <img src={lineImage} alt="" />
      </div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-brand">
              <div className="footer-logo-section">
                <Logo />
                <span className="footer-logo-text">belulok</span>
              </div>
              <a href="mailto:belulok_sebastian@hotmail.com" className="footer-email">
                belulok_sebastian@hotmail.com
              </a>
            </div>
            <p className="footer-tagline">
              Enginner + Developer + Architect
            </p>
          </div>
          
          <div className="footer-right">
            {/* <h3 className="footer-media-title">Media</h3>
            <div className="footer-social">
              <a href="https://github.com/belulok" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.figma.com/@belulok" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaFigma />
              </a>
              <a href="https://discord.com/users/sebestdebest" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
              <a href="https://x.com/sebestdebest" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://t.me/sebestdebest" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </a>
            </div> */}
          </div>
        </div>
        
        <p className="footer-copyright">
          © Copyright 2026. Made by Sebastian belulok
        </p>
      </div>
    </footer>
  );
};

export default Footer;