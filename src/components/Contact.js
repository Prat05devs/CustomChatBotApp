import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  

  return (
    <><header className="navbar">
      <span className="app-name">BodhGuru</span>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/chat" className="nav-link">Chat</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link active">Contact</Link>
      </nav>
    </header><div className="contact-page">

        <h1>Contact Us</h1>
        <p>Feel free to reach out to us through the following channels or use the form below:</p>

        <form>
          <label>Your Name</label>
          <input type="text" name="name" className="input"></input>
          <label>Email</label>
          <input type="email" name="email" className="input"></input>
          <label>Subject</label>
          <input type="text" name="message" className="input"></input>
          <label>Message</label>
          <input type="text" name="text" className="input" placeholder="Write a message"></input>

          <button><span>Submit</span></button>
        </form>
      </div></>
  );
};

export default Contact;
