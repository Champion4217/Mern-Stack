import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import slick carousel styles globally
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { AuthProvider } from './components/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthProvider>
);

