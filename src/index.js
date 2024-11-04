import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss'
import App from './App.js';
import Header from './Header.js'
import Footer from './Footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>
);