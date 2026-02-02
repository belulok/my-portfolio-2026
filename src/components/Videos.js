import React, { useState } from 'react';
import VideosExpanded from './VideosExpanded';
import './Videos.css';

const lineImage = "https://www.figma.com/api/mcp/asset/bd74e855-afd1-41e8-a8fa-091252df047b";

const VideoCard = ({ title, description, duration, publishDate, url, channel, image, type, isEmbedded = false }) => {
  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(url);

  const handleThumbnailClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="video-card">
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
          </div>
        ) : (
          <div className="video-thumbnail-container" onClick={handleThumbnailClick} style={{ cursor: 'pointer' }}>
            <img src={image} alt={title} />
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
        <div className="video-buttons">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Watch on YouTube &lt;~&gt;</a>
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const videos = [
    {
      title: "The Career Redesign: From Building Machines to Building Software",
      description: "A deep dive into my career transition from mechanical engineering to software development, sharing insights and lessons learned along the way.",
      duration: "45:32",
      publishDate: "2024",
      url: "https://www.youtube.com/watch?v=HhRPBoPidMI",
      channel: "Sigma School",
      type: "Podcast",
      image: "https://img.youtube.com/vi/HhRPBoPidMI/hqdefault.jpg"
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
    return <VideosExpanded onClose={handleCloseExpanded} />;
  }

  return (
    <section id="videos" className="videos">
      <div className="section-header">
        <h2 className="section-title">
          <span className="hash">#</span>videos
        </h2>
        <div className="section-line">
          <img src={lineImage} alt="" />
        </div>
        <a href="#" className="view-all" onClick={handleViewAll}>View all ~~&gt;</a>
      </div>
      
      <div className="videos-grid">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </section>
  );
};

export default Videos;