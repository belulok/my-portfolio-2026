import React, { useState } from 'react';
import Dots from './Dots';
import AboutExpanded from './AboutExpanded';
import './About.css';

// Using local images with cache busting
const aboutImage = "/sebastian.png?v=" + Date.now();
const lineImage = "https://www.figma.com/api/mcp/asset/f95e29e2-5f1c-4acd-b0d1-0f9b9f192aa7";
// const bottomLineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewMore = (e) => {
    e.preventDefault();
    setIsExpanded(true);
  };

  const handleCloseExpanded = () => {
    setIsExpanded(false);
  };

  if (isExpanded) {
    return <AboutExpanded onClose={handleCloseExpanded} />;
  }

  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">
          <span className="hash">#</span>about-me
        </h2>
        <div className="section-line">
          <img src={lineImage} alt="" />
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            Hello, I'm Sebastian!
            <br /><br />
            I'm a full stack developer and AI engineer based in Malaysia. I shifted from Mechanical Engineering to Computer Science and got into full stack development, ML, and AI. I enjoy building innovative tech solutions and learning new things.
            <br /><br />
            I've worked at companies like Pixlr, Valuelabs, and Cognizant, building web applications, AI systems, and automation tools. I've won some hackathons and like helping other developers learn.
          </p>
          <button className="btn btn-primary" onClick={handleViewMore}>
            Read more -&gt;
          </button>
        </div>
        
        <div className="about-visual">
          <div className="about-image">
            <img src={aboutImage} alt="About Sebastian" />
          </div>
          <Dots className="about-dots-1" />
          <Dots className="about-dots-2" />
          {/* <div className="about-line">
            <img src={bottomLineImage} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;