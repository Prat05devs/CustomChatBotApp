import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from '../components/ChatPage';  // Adjust the path based on your project structure
import LandingPage from '../components/LandingPage'; // Adjust the path based on your project structure
import About from '../components/About';
import Contact from '../components/Contact';
import '../styles/App.css'; // Adjust the path based on your project structure

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

