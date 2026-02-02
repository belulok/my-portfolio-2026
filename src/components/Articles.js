import React, { useState } from 'react';
import ArticlesExpanded from './ArticlesExpanded';
import './Articles.css';

const lineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const ArticleCard = ({ title, description, readTime, publishDate, url, image }) => (
  <div className="article-card">
    <div className="article-image">
      <img src={image} alt={title} />
    </div>
    <div className="article-meta">
      <span className="article-date">{publishDate}</span>
      <span className="article-read-time">{readTime}</span>
    </div>
    <div className="article-content">
      <h3 className="article-title">{title}</h3>
      <p className="article-description">{description}</p>
      <div className="article-buttons">
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read on Medium &lt;~&gt;</a>
      </div>
    </div>
  </div>
);

const Articles = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const articles = [
    {
      title: "My Journey Into the Tech Life",
      description: "A personal reflection on transitioning into the technology industry and the lessons learned along the way.",
      readTime: "5 min read",
      publishDate: "2024",
      url: "https://medium.com/@53845tianbelulok/my-journey-into-the-tech-life-5aa2213290bd",
      image: "/medium1.webp"
    },
    {
      title: "Why Software Engineering Prestige Doesn't Look Like Law, Medicine, or Chartered Professions",
      description: "Exploring why software engineering competence is judged differently from traditional licensed professions and what this means for the industry.",
      readTime: "8 min read",
      publishDate: "2024",
      url: "https://medium.com/@53845tianbelulok/why-software-engineering-prestige-doesnt-look-like-law-medicine-or-chartered-professions-and-69b193e1d1e9",
      image: "/medium2.webp"
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
    return <ArticlesExpanded onClose={handleCloseExpanded} />;
  }

  return (
    <section id="articles" className="articles">
      <div className="section-header">
        <h2 className="section-title">
          <span className="hash">#</span>articles
        </h2>
        <div className="section-line">
          <img src={lineImage} alt="" />
        </div>
        <a href="#" className="view-all" onClick={handleViewAll}>View all ~~&gt;</a>
      </div>
      
      <div className="articles-grid">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;