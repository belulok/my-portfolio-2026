import React from 'react';
import './Quote.css';

// Using the asset URL from Figma
const quoteIcon = "https://www.figma.com/api/mcp/asset/15fb23fb-2e24-4921-8851-6b95b0096bf7";

const Quote = () => {
  return (
    <section className="quote">
      <div className="quote-container">
        <div className="quote-mark quote-mark-left">
          <img src={quoteIcon} alt="" />
        </div>
        <p className="quote-text">
          We need problems in this world, because without them, we'll go hungry
        </p>
        <div className="quote-mark quote-mark-right">
          <img src={quoteIcon} alt="" />
        </div>
        <div className="quote-author">
          <p>- Probably me</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;