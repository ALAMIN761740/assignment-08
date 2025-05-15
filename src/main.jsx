import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // App.jsx থেকে ইম্পোর্ট করবে যেখানে তোমার ToastContainer ও LoadingProvider আছে
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
