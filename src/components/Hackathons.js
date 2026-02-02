import React, { useState } from 'react';
import HackathonsExpanded from './HackathonsExpanded';
import './Hackathons.css';

const lineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const HackathonCard = ({ title, description, technologies, result, date, image }) => (
  <div className="hackathon-card">
    <div className="hackathon-image">
      <img src={image} alt={title} />
    </div>
    <div className="hackathon-tech">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
      ))}
    </div>
    <div className="hackathon-content">
      <h3 className="hackathon-title">{title}</h3>
      <p className="hackathon-date">{date}</p>
      <p className="hackathon-description">{description}</p>
      <div className="hackathon-result">
        <span className="result-badge">{result}</span>
      </div>
    </div>
  </div>
);

const Hackathons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hackathons = [
    {
      title: "Deriv Hackathon",
      description: "Built innovative trading solutions using Deriv's API platform",
      technologies: ["React", "Deriv API", "Trading", "FinTech"],
      result: "Participant",
      date: "2024",
      image: "/derivhack.png"
    },
    {
      title: "Sui Hackathon",
      description: "Developed blockchain applications on the Sui network",
      technologies: ["Sui", "Move", "Blockchain", "DeFi"],
      result: "Participant",
      date: "2024",
      image: "/suihack.png"
    },
    {
      title: "IOTA Hackathon",
      description: "Created IoT and sustainability solutions using IOTA technology",
      technologies: ["IOTA", "IoT", "Sustainability", "Blockchain"],
      result: "Participant",
      date: "2024",
      image: "/iotahack.png"
    }
  ];

  const handleViewAll = (e) => {
    e.preventDefault();
    setIsExpanded(true);
  };

  const handleCloseExpanded = () => {
    setIsExpanded(false);
  };

  if (isExpanded) {
    return <HackathonsExpanded onClose={handleCloseExpanded} />;
  }

  return (
    <section id="hackathons" className="hackathons">
      <div className="section-header">
        <h2 className="section-title">
          <span className="hash">#</span>hackathons
        </h2>
        <div className="section-line">
          <img src={lineImage} alt="" />
        </div>
        <a href="#" className="view-all" onClick={handleViewAll}>View all ~~&gt;</a>
      </div>
      
      <div className="hackathons-grid">
        {hackathons.map((hackathon, index) => (
          <HackathonCard key={index} {...hackathon} />
        ))}
      </div>
    </section>
  );
};

export default Hackathons;