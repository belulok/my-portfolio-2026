import React, { useState } from 'react';
import { FaDiscord, FaTelegram, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

// Using the asset URLs from Figma
const lineImage = "https://www.figma.com/api/mcp/asset/2eefbbb9-28e9-4eb8-b60b-a23fe44807eb";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <section id="contacts" className="contact">
      <div className="section-header">
        <h2 className="section-title">
          <span className="hash">#</span>contacts
        </h2>
        <div className="section-line">
          <img src={lineImage} alt="" />
        </div>
      </div>
      
      <div className="contact-content">
        <div className="contact-text">
          <p className="contact-description">
            I'm interested in full stack development, AI engineering, and freelance opportunities. However, if you have other requests or questions, don't hesitate to contact me
          </p>
        </div>
        
        <div className="contact-info">
          <div className="contact-card">
            <h3 className="contact-card-title">Message me here</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <FaDiscord className="contact-icon" />
                <span className="contact-handle">@sebestdebest</span>
              </div>
              <div className="contact-method">
                <FaEnvelope className="contact-icon" />
                <span className="contact-handle">belulok_sebastian@hotmail.com</span>
              </div>
              <div className="contact-method">
                <FaTelegram className="contact-icon" />
                <span className="contact-handle">@sebestdebest</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              rows="6"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="form-submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;