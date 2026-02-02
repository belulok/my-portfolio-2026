import React, { useState } from 'react';
import Dots from './Dots';
import SkillsExpanded from './SkillsExpanded';
import './Skills.css';

// Using the asset URLs from Figma
const lineImage = "https://www.figma.com/api/mcp/asset/b2352a0b-e3d2-414d-ae55-7d3014c3472c";
const logoImage = "https://www.figma.com/api/mcp/asset/26810a9d-1495-4ae0-960e-306989eb5868";

const SkillBlock = ({ title, skills }) => (
  <div className="skill-block">
    <div className="skill-header">
      <h3 className="skill-title">{title}</h3>
    </div>
    <div className="skill-divider"></div>
    <div className="skill-list">
      {skills.map((skillGroup, index) => (
        <div key={index} className="skill-group">
          {skillGroup.map((skill, skillIndex) => (
            <span key={skillIndex} className="skill-item">{skill}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const skillsData = [
    {
      title: "Languages",
      skills: [
        ["Python", "JavaScript"],
        ["TypeScript", "Java"],
        ["C", "C++"]
      ]
    },
    {
      title: "AI/ML",
      skills: [
        ["OpenAI GPT", "DeepSeek"],
        ["LangChain", "Hugging Face"],
        ["PyTorch", "TensorFlow"]
      ]
    },
    {
      title: "Frontend",
      skills: [
        ["React", "Vue.js"],
        ["Next.js", "HTML"],
        ["CSS", "TypeScript"]
      ]
    },
    {
      title: "Backend",
      skills: [
        ["Node.js", "Express"],
        ["Django", "Flask"],
        ["PHP", "Laravel"]
      ]
    },
    {
      title: "Databases",
      skills: [
        ["PostgreSQL", "MongoDB"],
        ["MySQL", "SQLite"]
      ]
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
    return <SkillsExpanded onClose={handleCloseExpanded} />;
  }

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">
          <span className="hash">#</span>skills
        </h2>
        <div className="section-line">
          <img src={lineImage} alt="" />
        </div>
        <a href="#" className="view-all" onClick={handleViewAll}>View all ~~&gt;</a>
      </div>
      
      <div className="skills-content">
        <div className="skills-decorative">
          <Dots className="skills-dots-1" />
          <Dots className="skills-dots-2" />
          <div className="skills-rectangle-1"></div>
          <div className="skills-rectangle-2"></div>
          <div className="skills-logo">
            <img src={logoImage} alt="" />
          </div>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <SkillBlock key={index} {...skillCategory} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;