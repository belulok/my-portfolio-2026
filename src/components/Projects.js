import React, { useState } from 'react';
import ProjectsExpanded from './ProjectsExpanded';
import './Projects.css';

// Using project-specific images
const webmergerImage = "/webmerger.png";
const questchainImage = "/questchain.png";
const ecomonImage = "/ecomon.png";
const lineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const ProjectCard = ({ title, description, technologies, liveLink, demoLink, image }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
    <div className="project-tech">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
      ))}
    </div>
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-buttons">
        <a href={liveLink} className="btn btn-primary">Live &lt;~&gt;</a>
        <a href={demoLink} className="btn btn-secondary">Cached &gt;=</a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const projects = [
    {
      title: "Web Merger",
      description: "Translation engine bridging Web2 users with Web3 opportunities through personalized pathways",
      technologies: ["React", "AI/ML", "Web3", "Personalization", "Next.js"],
      liveLink: "https://web-merger-miir.bolt.host/",
      demoLink: "https://web-merger-miir.bolt.host/",
      image: webmergerImage
    },
    {
      title: "QuestChain Academy",
      description: "AI-driven web3 learning platform with gamification and blockchain integration",
      technologies: ["React", "Blockchain", "Sui", "AI/ML", "Web3"],
      liveLink: "#",
      demoLink: "#",
      image: questchainImage
    },
    {
      title: "EcoMon Platform",
      description: "Gamified recycling platform powered by IOTA blockchain - Pokemon Go style recycling game",
      technologies: ["React", "IOTA", "Blockchain", "Gamification", "IoT"],
      liveLink: "https://ecomon-iota.web.app/",
      demoLink: "https://ecomon-iota.web.app/",
      image: ecomonImage
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
    return <ProjectsExpanded onClose={handleCloseExpanded} />;
  }

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">
          <span className="hash">#</span>projects
        </h2>
        <div className="section-line">
          <img src={lineImage} alt="" />
        </div>
        <a href="#" className="view-all" onClick={handleViewAll}>View all ~~&gt;</a>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;