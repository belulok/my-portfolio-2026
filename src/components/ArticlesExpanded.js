import React from 'react';
import InteractiveBackground from './InteractiveBackground';
import './ArticlesExpanded.css';

const placeholderImage = "/placeholder.png";
const lineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const ArticleCard = ({ title, description, readTime, publishDate, url, excerpt, tags, image, size = "normal" }) => (
  <div className={`article-card ${size}`}>
    <div className="article-image">
      <img src={image || placeholderImage} alt={title} />
    </div>
    <div className="article-meta">
      <span className="article-date">{publishDate}</span>
      <span className="article-read-time">{readTime}</span>
    </div>
    {tags && (
      <div className="article-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    )}
    <div className="article-content">
      <h3 className="article-title">{title}</h3>
      <p className="article-description">{description}</p>
      {excerpt && (
        <div className="article-excerpt">
          <p>"{excerpt}"</p>
        </div>
      )}
      <div className="article-buttons">
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read on Medium &lt;~&gt;</a>
      </div>
    </div>
  </div>
);

const ArticlesExpanded = ({ onClose }) => {
  const featuredArticles = [
    {
      title: "My Journey Into the Tech Life",
      description: "A personal reflection on transitioning into the technology industry, sharing the challenges, discoveries, and lessons learned along the way from a non-traditional background.",
      readTime: "5 min read",
      publishDate: "2024",
      url: "https://medium.com/@53845tianbelulok/my-journey-into-the-tech-life-5aa2213290bd",
      excerpt: "Every journey into tech is unique, but the challenges and discoveries often share common threads that connect us all.",
      tags: ["Career", "Tech Journey", "Personal Growth", "Transition"],
      image: "/medium1.webp"
    },
    {
      title: "Why Software Engineering Prestige Doesn't Look Like Law, Medicine, or Chartered Professions",
      description: "An in-depth exploration of why software engineering competence is judged differently from traditional licensed professions, examining the unique nature of software systems and their impact on society.",
      readTime: "8 min read",
      publishDate: "2024",
      url: "https://medium.com/@53845tianbelulok/why-software-engineering-prestige-doesnt-look-like-law-medicine-or-chartered-professions-and-69b193e1d1e9",
      excerpt: "Software engineering did not evolve like medicine, law, or traditional engineering. Those professions share three traits: Stable bodies of knowledge, Direct legal liability to the public, Centralized regulation. Software has none of these.",
      tags: ["Software Engineering", "Professional Development", "Industry Analysis", "Career Insights"],
      image: "/medium2.webp"
    }
  ];

  const upcomingTopics = [
    {
      title: "Building Scalable Web Applications",
      description: "Lessons learned from building applications that serve thousands of users",
      readTime: "Coming Soon",
      publishDate: "2025",
      url: "#",
      tags: ["Web Development", "Scalability", "Architecture"],
      image: placeholderImage
    },
    {
      title: "The Future of Web3 Development",
      description: "Insights from hackathons and real-world blockchain projects",
      readTime: "Coming Soon",
      publishDate: "2025",
      url: "#",
      tags: ["Web3", "Blockchain", "Future Tech"],
      image: placeholderImage
    }
  ];

  return (
    <div className="articles-expanded">
      <InteractiveBackground />
      <div className="articles-header">
        <div className="breadcrumb">
          <span className="hash">/</span>
          <span>articles</span>
        </div>
        <p className="articles-subtitle">My thoughts on technology, career, and software development</p>
      </div>

      <div className="articles-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="hash">#</span>published-articles
          </h2>
          <div className="section-line">
            <img src={lineImage} alt="" />
          </div>
        </div>
        
        <div className="featured-articles-grid">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>

      <div className="articles-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="hash">#</span>upcoming-topics
          </h2>
          <div className="section-line">
            <img src={lineImage} alt="" />
          </div>
        </div>
        
        <div className="upcoming-articles-grid">
          {upcomingTopics.map((article, index) => (
            <ArticleCard key={index} {...article} size="small" />
          ))}
        </div>
      </div>

      <button className="close-button" onClick={onClose}>
        ← Back to Home
      </button>
    </div>
  );
};

export default ArticlesExpanded;