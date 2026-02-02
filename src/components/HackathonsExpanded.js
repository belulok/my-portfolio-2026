import React from 'react';
import InteractiveBackground from './InteractiveBackground';
import './HackathonsExpanded.css';

const placeholderImage = "/placeholder.png";
const lineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const HackathonCard = ({ title, description, technologies, result, date, achievements, image, size = "normal" }) => (
  <div className={`hackathon-card ${size}`}>
    <div className="hackathon-image">
      <img src={image || placeholderImage} alt={title} />
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
      {achievements && (
        <div className="hackathon-achievements">
          <h4>Achievements:</h4>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="hackathon-result">
        <span className="result-badge">{result}</span>
      </div>
    </div>
  </div>
);

const HackathonsExpanded = ({ onClose }) => {
  const majorHackathons = [
    {
      title: "Deriv Hackathon",
      description: "Built innovative trading solutions using Deriv's comprehensive API platform. Focused on creating user-friendly interfaces for complex financial instruments and automated trading strategies.",
      technologies: ["React", "Deriv API", "Trading Algorithms", "FinTech", "WebSocket", "Chart.js"],
      result: "Participant",
      date: "2024",
      achievements: [
        "Developed real-time trading dashboard",
        "Implemented automated trading strategies",
        "Created risk management tools"
      ],
      image: "/derivhack.png"
    },
    {
      title: "Sui Hackathon",
      description: "Developed decentralized applications on the Sui blockchain network, leveraging Move programming language for smart contract development and exploring innovative DeFi solutions.",
      technologies: ["Sui", "Move", "Blockchain", "DeFi", "Smart Contracts", "Web3"],
      result: "Participant",
      date: "2024",
      achievements: [
        "Built DeFi lending protocol",
        "Implemented NFT marketplace features",
        "Created cross-chain bridge concepts"
      ],
      image: "/suihack.png"
    },
    {
      title: "IOTA Hackathon",
      description: "Created IoT and sustainability-focused solutions using IOTA's Tangle technology. Developed applications for environmental monitoring and sustainable resource management.",
      technologies: ["IOTA", "IoT", "Sustainability", "Tangle", "Environmental Tech", "Data Analytics"],
      result: "Participant",
      date: "2024",
      achievements: [
        "Built EcoMon recycling platform",
        "Implemented IoT sensor integration",
        "Created environmental impact tracking"
      ],
      image: "/iotahack.png"
    },
    {
      title: "Sui Indonesia Mini Hackathon",
      description: "Sui Indonesia - Sui Mini Hackathon Recap Bootcamp Indonesia 2025. Project Results from Sui Bootcamp Jakarta Topic: NFT Launchpad. Congratulations to all builders who participated and showcased outstanding innovation on Sui.",
      technologies: ["Sui", "NFT", "Launchpad", "Indonesia", "Bootcamp", "Innovation"],
      result: "Participant",
      date: "2025",
      achievements: [
        "Developed NFT launchpad platform",
        "Showcased innovation on Sui network",
        "Participated in Jakarta bootcamp"
      ],
      image: "/suiindo.jpeg"
    }
  ];

  const otherCompetitions = [
    {
      title: "BugCrusher Coding Competition",
      description: "Led as workshop coach and lead judge for coding competition focused on debugging and problem-solving skills",
      technologies: ["Mentoring", "Judging", "Problem Solving", "Debugging"],
      result: "Coach & Judge",
      date: "2024",
      image: placeholderImage
    },
    {
      title: "Web3 Innovation Challenge",
      description: "Participated in various Web3 challenges focusing on blockchain integration and decentralized solutions",
      technologies: ["Web3", "Blockchain", "Innovation", "DApps"],
      result: "Participant",
      date: "2024",
      image: placeholderImage
    }
  ];

  return (
    <div className="hackathons-expanded">
      <InteractiveBackground />
      <div className="hackathons-header">
        <div className="breadcrumb">
          <span className="hash">/</span>
          <span>hackathons</span>
        </div>
        <p className="hackathons-subtitle">My hackathon and competition journey</p>
      </div>

      <div className="hackathons-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="hash">#</span>major-hackathons
          </h2>
          <div className="section-line">
            <img src={lineImage} alt="" />
          </div>
        </div>
        
        <div className="major-hackathons-grid">
          {majorHackathons.map((hackathon, index) => (
            <HackathonCard key={index} {...hackathon} />
          ))}
        </div>
      </div>

      <div className="hackathons-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="hash">#</span>competitions
          </h2>
          <div className="section-line">
            <img src={lineImage} alt="" />
          </div>
        </div>
        
        <div className="competitions-grid">
          {otherCompetitions.map((competition, index) => (
            <HackathonCard key={index} {...competition} size="small" />
          ))}
        </div>
      </div>

      <button className="close-button" onClick={onClose}>
        ← Back to Home
      </button>
    </div>
  );
};

export default HackathonsExpanded;