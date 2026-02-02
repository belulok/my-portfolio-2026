import React, { useState } from 'react';
import InteractiveBackground from './InteractiveBackground';
import './VideosExpanded.css';

const placeholderImage = "/placeholder.png";
const lineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const VideoCard = ({ title, description, duration, publishDate, url, channel, highlights, image, type, size = "normal", isEmbedded = false }) => {
  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(url);

  // For this specific video, let's provide a clickable thumbnail that opens YouTube
  const handleThumbnailClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className={`video-card ${size}`}>
      <div className="video-image">
        {isEmbedded && videoId ? (
          <div className="video-embed-container">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <div className="embed-fallback">
              <p>Having trouble viewing the video?</p>
              <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Watch on YouTube &lt;~&gt;
              </a>
            </div>
          </div>
        ) : (
          <div className="video-thumbnail-container" onClick={handleThumbnailClick} style={{ cursor: 'pointer' }}>
            <img src={image || placeholderImage} alt={title} />
            <div className="video-overlay">
              <div className="play-button">▶</div>
            </div>
            <div className="video-duration">{duration}</div>
          </div>
        )}
      </div>
      <div className="video-meta">
        <span className="video-channel">{channel}</span>
        <span className="video-date">{publishDate}</span>
      </div>
      <div className="video-content">
        <div className="video-type-badge">{type}</div>
        <h3 className="video-title">{title}</h3>
        <p className="video-description">{description}</p>
        {highlights && (
          <div className="video-highlights">
            <h4>Key Topics:</h4>
            <ul>
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="video-buttons">
          {!isEmbedded && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Watch on YouTube &lt;~&gt;</a>
          )}
        </div>
      </div>
    </div>
  );
};

const VideosExpanded = ({ onClose }) => {
  const [showEmbedded, setShowEmbedded] = useState(true);

  const featuredVideos = [
    {
      title: "The Career Redesign: From Building Machines to Building Software",
      description: "A comprehensive discussion about transitioning from mechanical engineering to software development. This podcast explores the challenges, mindset shifts, and practical steps involved in making a successful career pivot into tech.",
      duration: "45:32",
      publishDate: "2024",
      url: "https://www.youtube.com/watch?v=HhRPBoPidMI",
      channel: "Sigma School",
      type: "Podcast",
      highlights: [
        "Career transition strategies from engineering to software",
        "Overcoming imposter syndrome in tech",
        "Building technical skills while working full-time",
        "The importance of community and mentorship",
        "Practical advice for career changers"
      ],
      image: "https://img.youtube.com/vi/HhRPBoPidMI/hqdefault.jpg"
    }
  ];

  const upcomingContent = [
    {
      title: "Building Scalable Web Applications",
      description: "Technical deep-dive into architecture decisions and scaling strategies",
      duration: "Coming Soon",
      publishDate: "2025",
      url: "#",
      channel: "TBD",
      type: "Tech Talk",
      image: placeholderImage
    },
    {
      title: "Web3 Development Journey",
      description: "Sharing experiences from hackathons and blockchain projects",
      duration: "Coming Soon",
      publishDate: "2025",
      url: "#",
      channel: "TBD",
      type: "Interview",
      image: placeholderImage
    }
  ];

  return (
    <div className="videos-expanded">
      <InteractiveBackground />
      <div className="videos-header">
        <div className="breadcrumb">
          <span className="hash">/</span>
          <span>videos</span>
        </div>
        <p className="videos-subtitle">Podcasts, interviews, and tech talks featuring my journey</p>
      </div>

      <div className="videos-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="hash">#</span>featured-content
          </h2>
          <div className="section-line">
            <img src={lineImage} alt="" />
          </div>
          <button 
            className="toggle-embed-btn"
            onClick={() => setShowEmbedded(!showEmbedded)}
          >
            {showEmbedded ? 'Show Thumbnail' : 'Try Embed'} ~~&gt;
          </button>
        </div>
        
        <div className="featured-videos-grid">
          {featuredVideos.map((video, index) => (
            <VideoCard key={index} {...video} isEmbedded={showEmbedded} />
          ))}
        </div>
        
        {showEmbedded && (
          <div className="embed-notice">
            <p>
              <strong>Note:</strong> Some videos may have embedding restrictions set by the content owner. 
              If the video doesn't play above, click "Watch on YouTube" to view it directly on YouTube.
            </p>
          </div>
        )}
      </div>

      <div className="videos-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="hash">#</span>upcoming-content
          </h2>
          <div className="section-line">
            <img src={lineImage} alt="" />
          </div>
        </div>
        
        <div className="upcoming-videos-grid">
          {upcomingContent.map((video, index) => (
            <VideoCard key={index} {...video} size="small" />
          ))}
        </div>
      </div>

      <button className="close-button" onClick={onClose}>
        ← Back to Home
      </button>
    </div>
  );
};

export default VideosExpanded;