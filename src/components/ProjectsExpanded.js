import React from 'react';
import InteractiveBackground from './InteractiveBackground';
import './ProjectsExpanded.css';

// Using project-specific images
const webmergerImage = "/webmerger.png";
const questchainImage = "/questchain.png";
const ecomonImage = "/ecomon.png";
const placeholderImage = "/placeholder.png";
const lineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const ProjectCard = ({ title, description, technologies, liveLink, demoLink, image, size = "normal" }) => (
  <div className={`project-card ${size}`}>
    <div className="project-image">
      <img src={image || placeholderImage} alt={title} />
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
        {liveLink && <a href={liveLink} className="btn btn-primary">Live &lt;~&gt;</a>}
        {demoLink && <a href={demoLink} className="btn btn-secondary">Cached &gt;=</a>}
      </div>
    </div>
  </div>
);

const ProjectsExpanded = ({ onClose }) => {
  const completeApps = [
    {
      title: "Web Merger",
      description: "Translation and activation engine bridging Web2 users with Web3 opportunities. Provides personalized pathways into the digital economy through AI-powered matching and clear explanations.",
      technologies: ["React", "AI/ML", "Web3", "Personalization", "Next.js", "Digital Identity"],
      liveLink: "https://web-merger-miir.bolt.host/",
      demoLink: "https://web-merger-miir.bolt.host/",
      image: webmergerImage
    },
    {
      title: "QuestChain Academy",
      description: "AI-driven web3 learning platform with gamification and Sui blockchain integration. Features quest-based learning and achievement tracking.",
      technologies: ["React", "Blockchain", "Sui", "AI/ML", "Web3", "Gamification"],
      liveLink: "#",
      demoLink: "#",
      image: questchainImage
    },
    {
      title: "EcoMon Platform",
      description: "Gamified recycling platform powered by IOTA blockchain - Pokemon Go style recycling game with real-world environmental impact tracking.",
      technologies: ["React", "IOTA", "Blockchain", "Gamification", "IoT", "Environmental"],
      liveLink: "https://ecomon-iota.web.app/",
      demoLink: "https://ecomon-iota.web.app/",
      image: ecomonImage
    },
    {
      title: "AI HR Toolkit",
      description: "AI-Powered HR platform for resume analysis, job matching, email classification, and sentiment analysis",
      technologies: ["Flask", "Next.js", "PostgreSQL", "AI/ML", "spaCy", "Sentence-BERT"],
      liveLink: "https://ai-hr-toolkit-client-sid-belulok-sebastian-hotmailcoms-projects.vercel.app",
      demoLink: "https://github.com/belulok/ai-hr-toolkit-client-side",
      image: placeholderImage
    },
    {
      title: "AI Social Trading Platform",
      description: "AI-driven social trading platform with DeepSeek integration for stock analysis and trader matching",
      technologies: ["React", "DeepSeek", "PostgreSQL", "pgVector", "Stock APIs"],
      liveLink: "https://zingy-kataifi-fb1af6.netlify.app/",
      demoLink: "https://github.com/belulok/social-trading-platform",
      image: placeholderImage
    }
  ];

  const smallProjects = [
    {
      title: "LMS Portal",
      description: "In-house Learning Management System for RealFun Academy with progress tracking",
      technologies: ["Vue.js", "Django", "PostgreSQL"],
      demoLink: "#",
      image: placeholderImage
    },
    {
      title: "Automation Workflows",
      description: "Created robust automations using Integromat/Make.com saving 10+ hours weekly",
      technologies: ["Make.com", "APIs", "Automation"],
      demoLink: "#",
      image: placeholderImage
    },
    {
      title: "HubSpot Integrations",
      description: "Custom HubSpot forms with automations for streamlined business processes",
      technologies: ["HubSpot", "APIs", "JavaScript"],
      demoLink: "#",
      image: placeholderImage
    },
    {
      title: "WordPress Themes",
      description: "Custom WordPress themes and plugins with payment gateway integrations",
      technologies: ["WordPress", "PHP", "JavaScript"],
      demoLink: "#",
      image: placeholderImage
    },
    {
      title: "AI Code Auditor",
      description: "Generative AI tools for code review and browser extension security analysis",
      technologies: ["AI/ML", "Code Analysis", "Security"],
      demoLink: "#",
      image: placeholderImage
    },
    {
      title: "Dashboard Optimization",
      description: "Performance optimization of enterprise dashboards reducing load times by 30%",
      technologies: ["React", "TypeScript", "Performance"],
      demoLink: "#",
      image: placeholderImage
    },
    {
      title: "Training Platform",
      description: "AI-driven automated dashboard for bootcamp teaching workflows",
      technologies: ["AI/ML", "Education", "Automation"],
      demoLink: "#",
      image: placeholderImage
    },
    {
      title: "Competition Platform",
      description: "Led BugCrusher Coding Competition as workshop coach and lead judge",
      technologies: ["Event Management", "Mentoring", "Judging"],
      demoLink: "#",
      image: placeholderImage
    }
  ];

  return (
    <div className="projects-expanded">
      <InteractiveBackground />
      <div className="projects-header">
        <div className="breadcrumb">
          <span className="hash">/</span>
          <span>projects</span>
        </div>
        <p className="projects-subtitle">List of my projects</p>
      </div>

      <div className="projects-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="hash">#</span>complete-apps
          </h2>
          <div className="section-line">
            <img src={lineImage} alt="" />
          </div>
        </div>
        
        <div className="complete-apps-grid">
          {completeApps.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="projects-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="hash">#</span>small-projects
          </h2>
          <div className="section-line">
            <img src={lineImage} alt="" />
          </div>
        </div>
        
        <div className="small-projects-grid">
          {smallProjects.map((project, index) => (
            <ProjectCard key={index} {...project} size="small" />
          ))}
        </div>
      </div>

      <button className="close-button" onClick={onClose}>
        ← Back to Home
      </button>
    </div>
  );
};

export default ProjectsExpanded;