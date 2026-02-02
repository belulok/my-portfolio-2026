import React from 'react';
import './Logo.css';

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      <img src="/mylogo.png" alt="Sebastian Belulok Logo" className="logo-image" />
    </div>
  );
};

export default Logo;