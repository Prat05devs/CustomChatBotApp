import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/App'; // Adjust the path based on your project structure
import './styles/App.css'; // Adjust the path based on your project structure

const root = document.getElementById('root');

const renderApp = () => {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

renderApp();
