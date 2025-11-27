import React from 'react';                    // ← you can drop { React } curly braces
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/reactweb2">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);