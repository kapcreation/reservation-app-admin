import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeProvider } from './contexts/ColorModeContext';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </AuthProvider>
  </React.StrictMode>
);