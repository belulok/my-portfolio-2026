import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './SideMedia.css';

// Using the asset URLs from Figma
const lineIcon = "https://www.figma.com/api/mcp/asset/fa597d15-84e2-4a1b-bf46-55313fd14459";

const SideMedia = () => {
  return (
    <div className="side-media">
      <div className="line-container">
        <img src={lineIcon} alt="" className="vertical-line" />
      </div>
      <div className="social-icons">
        <a href="https://github.com/belulok" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sebastian-belulok" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/sebestdebest" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaXTwitter />
        </a>
        <a href="https://t.me/sebestdebest" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
};

export default SideMedia;