import React, { useState, useRef, useEffect } from 'react';
import InteractiveBackground from './InteractiveBackground';
import './AboutExpanded.css';

const TimelineItem = ({ year, title, company, subCompany, description, technologies, scale = 0.75, opacity = 0.3 }) => (
  <div 
    className="timeline-item-ios"
    style={{
      transform: `scale(${scale})`,
      opacity: opacity,
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }}
  >
    <div className="timeline-card-ios">
      <div className="timeline-year-ios">{year}</div>
      <h3 className="timeline-title-ios">{title}</h3>
      <div className="timeline-company-ios">
        {company}
        {subCompany && <div className="timeline-subcompany-ios">via {subCompany}</div>}
      </div>
      <p className="timeline-description-ios">{description}</p>
      {technologies && (
        <div className="timeline-tech-ios">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag-ios">{tech}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const AboutExpanded = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemScales, setItemScales] = useState([]);
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);

  const timelineData = [
    {
      year: "2025",
      title: "Senior Software Engineer",
      company: "Pixlr Sdn Bhd",
      description: "Integrated prompt management, tool routing, and model selection logic into production systems. Developed RAG-style workflows and implemented observability for AI pipelines.",
      technologies: ["AI/ML", "Python", "Node.js", "RAG", "Production Systems"]
    },
    {
      year: "2025",
      title: "Senior Software Engineer",
      company: "Maxis",
      subCompany: "Valuelabs Sdn Bhd",
      description: "Led backend system design and integration for enterprise-scale platforms. Built high-throughput data flows and real-time integrations.",
      technologies: ["Backend", "Enterprise", "APIs", "System Architecture", "Monitoring"]
    },
    {
      year: "2024-2025",
      title: "Senior Fullstack Web Engineer",
      company: "Premium Info Tech Sdn Bhd",
      description: "Designed agentic AI workflows using LLMs and automation frameworks. Built LLM-integrated backend services for document processing and AI-assisted decision flows.",
      technologies: ["Node.js", "LLMs", "n8n", "AI Workflows", "Embeddings"]
    },
    {
      year: "2024",
      title: "Software Engineer",
      company: "Google",
      subCompany: "Cognizant Technology Solutions",
      description: "Reduced security vulnerabilities by 20% through comprehensive code reviews. Improved user experience and accelerated release cycles by 30%.",
      technologies: ["Code Review", "Security", "Web Platforms", "CI/CD", "Quality Assurance"]
    },
    {
      year: "2022-2024",
      title: "Full Stack Web Developer",
      company: "Guinevere Global Sdn Bhd (Juno Markets)",
      description: "Optimized performance of dashboards and forms using modern frameworks. Reduced manual tasks through automation, saving 10+ hours weekly.",
      technologies: ["React", "Vue.js", "Laravel", "AWS", "TypeScript", "Automation"]
    },
    {
      year: "2022",
      title: "STEM Coach & Backend Developer",
      company: "RealFun Academy Sdn Bhd",
      description: "Developed in-house LMS portal and designed course plans. Guided students for coding competitions and organized tech workshops.",
      technologies: ["Vue.js", "Django", "Heroku", "AWS", "Education Tech"]
    },
    {
      year: "2020-2022",
      title: "Frontend Web Developer",
      company: "MediaPlus Digital Pte Ltd",
      description: "Developed WordPress websites and custom themes. Facilitated client training and integrated payment gateway APIs.",
      technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "jQuery"]
    }
  ];

  const calculateItemTransforms = () => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;

    const newScales = [];
    let newActiveIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      const distance = Math.abs(itemCenter - containerCenter);
      
      // Find the closest item to center
      if (distance < minDistance) {
        minDistance = distance;
        newActiveIndex = index;
      }

      // Calculate scale and opacity based on distance from center
      const maxDistance = containerRect.height / 2;
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      
      // Smooth scaling: closer to center = larger scale
      const scale = 0.7 + (1 - normalizedDistance) * 0.5; // Scale from 0.7 to 1.2
      const opacity = 0.2 + (1 - normalizedDistance) * 0.8; // Opacity from 0.2 to 1.0

      newScales[index] = {
        scale: Math.max(0.7, Math.min(1.2, scale)),
        opacity: Math.max(0.2, Math.min(1.0, opacity))
      };
    });

    setItemScales(newScales);
    setActiveIndex(newActiveIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      calculateItemTransforms();
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      // Initial calculation
      setTimeout(calculateItemTransforms, 100);
      
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToItem = (index) => {
    if (scrollRef.current && itemRefs.current[index]) {
      const container = scrollRef.current;
      const item = itemRefs.current[index];
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      
      const scrollTop = container.scrollTop + itemRect.top - containerRect.top - containerRect.height / 2 + itemRect.height / 2;
      
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="about-expanded">
      <InteractiveBackground />
      <button className="close-button" onClick={onClose}>
        ← Back to Home
      </button>
      
      <div className="about-header">
        <h1 className="breadcrumb">
          <span className="hash">#</span>about-me / timeline
        </h1>
        <p className="about-subtitle">My professional journey and experience</p>
      </div>
      
      <div className="timeline-ios-container">
        <div className="timeline-ios-wrapper">
          <div className="timeline-ios-scroller" ref={scrollRef}>
            <div className="timeline-ios-spacer"></div>
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
              >
                <TimelineItem 
                  {...item} 
                  scale={itemScales[index]?.scale || 0.75}
                  opacity={itemScales[index]?.opacity || 0.3}
                />
              </div>
            ))}
            <div className="timeline-ios-spacer"></div>
          </div>
          
          {/* Center indicator line */}
          <div className="timeline-ios-indicator"></div>
          
          {/* Navigation dots */}
          <div className="timeline-ios-dots">
            {timelineData.map((_, index) => (
              <button
                key={index}
                className={`timeline-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => scrollToItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="academic-section">
        <h2 className="academic-title">
          <span className="hash">#</span>education
        </h2>
        
        <div className="academic-content">
          <div className="academic-item">
            <h3 className="academic-degree">Bachelor in Software Engineering</h3>
            <p className="academic-institution">University Teknologi Malaysia (UTM)</p>
            <p className="academic-status">Currently pursuing</p>
          </div>
          
          <div className="academic-item">
            <h3 className="academic-degree">Foundation in Engineering & Science</h3>
            <p className="academic-institution">Curtin University Malaysia, Sarawak</p>
            <p className="academic-status">2013 - CGPA: 2.80</p>
          </div>
          
          <div className="academic-item">
            <h3 className="academic-degree">Full Stack Web Development Bootcamp</h3>
            <p className="academic-institution">TheHackerCollective (now Sigma School)</p>
            <p className="academic-status">2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExpanded;