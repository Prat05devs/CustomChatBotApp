import React, { useState } from 'react';
import { FaCamera, FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'whatwg-fetch'; // Only necessary if using fetch API for Python backend

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSendMessage = async () => {
    if (userInput.trim() === '' && !selectedFile) return;

    const newMessage = {
      text: userInput,
      sender: 'user',
      file: selectedFile,
    };

    setMessages([...messages, newMessage]);
    setUserInput('');
    setSelectedFile(null);

    try {
      // Replace with your Python chatbot API endpoint
      const response = await fetch('http://your-api-endpoint.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessage),
      });

      const data = await response.json();
      // Update messages with the received response from your chatbot API
      setMessages([...messages, ...data.response]); // Assuming your API response has a "response" property with new messages
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle any errors that might occur during the fetch request
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="App">
      <header className="navbar">
        <span className="app-name">BodhGuru</span>
        <nav className='navbar-links'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/chat" className="nav-link">Chat</Link>
          <Link to="/about" className="nav-link active">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>

      <div className="chat-window">
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
              {message.text}
              {message.file && (
                <div>
                  {message.file.type.includes('image') && <img src={URL.createObjectURL(message.file)} alt="User Upload" />}
                  {message.file.type.includes('audio') && (
                    <audio controls>
                      <source src={URL.createObjectURL(message.file)} type={message.file.type} />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <label className="file-input-label">
            <FaCamera />
            <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          </label>
          <label className="file-input-label">
            <FaMicrophone />
            <input type="file" accept="audio/*" onChange={handleFileChange} style={{ display: 'none' }} />
          </label>
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
