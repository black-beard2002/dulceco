import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for the new rendering method
import './index.css';
import App from './App.jsx';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
