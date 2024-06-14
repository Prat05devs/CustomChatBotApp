import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <><header className="navbar">
      <span className="app-name">BodhGuru</span>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/chat" className="nav-link">Chat</Link>
        <Link to="/about" className="nav-link active">About Us</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header><div className="about-page">

        <h1>About Us</h1>
        <p>
          This is a description of your chatbot application and its functionalities.
          You can describe your team, the purpose of the chatbot, and its potential uses.
        </p>
      </div></>
  );
};

export default About;
