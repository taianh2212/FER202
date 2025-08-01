import React from 'react';
import ReactDOM from 'react-dom/client';
import QuizApp from './components/QuizApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
);