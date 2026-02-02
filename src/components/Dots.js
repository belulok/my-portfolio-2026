import React from 'react';
import './Dots.css';

// Using the asset URL from Figma
const dotImage = "https://www.figma.com/api/mcp/asset/1095d052-cfc5-49bb-9a41-be02a45160af";

const Dots = ({ className = "" }) => {
  const renderDotRow = (rowIndex) => (
    <div key={rowIndex} className="dots-row">
      {[...Array(5)].map((_, dotIndex) => (
        <div key={dotIndex} className="dot">
          <img alt="" src={dotImage} />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`dots ${className}`}>
      {[...Array(5)].map((_, rowIndex) => renderDotRow(rowIndex))}
    </div>
  );
};

export default Dots;