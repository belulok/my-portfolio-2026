import React from 'react';
import Dots from './Dots';
import InteractiveBackground from './InteractiveBackground';
import './SkillsExpanded.css';

// Using the asset URLs from Figma
const logoImage = "https://www.figma.com/api/mcp/asset/26810a9d-1495-4ae0-960e-306989eb5868";

const SkillBlock = ({ title, skills, className = "" }) => (
  <div className={`skill-block-expanded ${className}`}>
    <div className="skill-header-expanded">
      <h3 className="skill-title-expanded">{title}</h3>
    </div>
    <div className="skill-content-expanded">
      {skills.map((skill, index) => (
        <span key={index} className="skill-item-expanded">{skill}</span>
      ))}
    </div>
  </div>
);

const FactBlock = ({ children, className = "" }) => (
  <div className={`fact-block ${className}`}>
    {children}
  </div>
);

const SkillsExpanded = ({ onClose }) => {
  const skillsData = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "PHP", "HTML", "CSS"]
    },
    {
      title: "AI/ML",
      skills: ["OpenAI GPT", "DeepSeek", "LangChain", "Hugging Face", "PyTorch", "TensorFlow", "spaCy", "Sentence-BERT"]
    },
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "Next.js", "TypeScript", "HTML5", "CSS3", "SCSS", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Django", "Flask", "Laravel", "RESTful APIs", "Microservices"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "pgVector", "Database Design"]
    }
  ];

  const facts = [
    "🏆 Won 1st place at Deriv Hackathon 2025",
    "🎓 Shifted from Mechanical Engineering to CS",
    "🤖 Passionate about AI and automation",
    "👨‍🏫 Love mentoring aspiring developers",
    "🌏 Based in Malaysia, working globally",
    "⚡ Reduced security vulnerabilities by 20%",
    "🚀 Built 50+ web applications and AI solutions"
  ];

  return (
    <div className="skills-expanded">
      <InteractiveBackground />
      <div className="skills-header">
        <div className="breadcrumb">
          <span className="hash">#</span>
          <span>skills</span>
        </div>
      </div>

      <div className="skills-grid-expanded">
        {skillsData.map((skillCategory, index) => (
          <SkillBlock key={index} {...skillCategory} />
        ))}
      </div>

      <div className="facts-section">
        <div className="facts-header">
          <h2 className="facts-title">
            <span className="hash">#</span>my-fun-facts
          </h2>
        </div>
        
        <div className="facts-content">
          <div className="facts-grid">
            {facts.map((fact, index) => (
              <FactBlock key={index}>
                {fact}
              </FactBlock>
            ))}
          </div>
          
          <div className="facts-decorative">
            <Dots className="facts-dots" />
            <div className="facts-rectangles">
              <div className="fact-rectangle fact-rect-1"></div>
              <div className="fact-rectangle fact-rect-2"></div>
              <div className="fact-rectangle fact-rect-3"></div>
            </div>
          </div>
        </div>
      </div>

      <button className="close-button" onClick={onClose}>
        ← Back to Home
      </button>
    </div>
  );
};

export default SkillsExpanded;