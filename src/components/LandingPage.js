import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin,FaInstagram,FaGithub,FaDiscord  } from 'react-icons/fa';

const LandingPage = () => {
  return (
    
      <><header className="navbar">
      <span className="app-name">BodhGuru</span>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/chat" className="nav-link">Chat</Link>
        <Link to="/about" className="nav-link active">About Us</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header><div className="landing-page">
        <div className="content">
          <h1 className="title">Welcome to ChatBot App</h1>
          <p className="description">Explore the power of conversation with our intelligent chatbot!</p>
          <Link to="/chat" className="try-chatbot-button">
            Try ChatBot
          </Link>
        </div>

      </div><footer className="footer">
          <div className="footer-left">
            <div className="contact-info">
              <p>123 Street,<br/> Dehradun City, <br/>India</p>
              <br/><br/>
              <p> Phone: +123 456 7890 </p>
            </div>
          </div>
          <div className="footer-right">
            <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noreferrer noopener" className="footer-link">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/your_instagram_profile/" target="_blank" rel="noreferrer noopener" className="footer-link">
              <FaInstagram className="footer-icon" />
            </a>
            <a href="https://github.com/your_github_username" target="_blank" rel="noreferrer noopener" className="footer-link">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://discord.com/your-discord-id" target="_blank" rel="noreferrer noopener" className="footer-link">
              <FaDiscord className="footer-icon" />
            </a>
          </div>
        </footer></>
  );
};

export default LandingPage;
