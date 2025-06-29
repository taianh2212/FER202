import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Quiz from './components/Quiz';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navigation />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
