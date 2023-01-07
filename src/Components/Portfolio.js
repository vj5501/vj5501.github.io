import React from 'react';
import '../CSS/Portfolio.css';
import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';


const Portfolio = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Vishnu Jadhav</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </header>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <footer className="footer">
        <p>Copyright 2020 Vishnu Jadhav</p>
      </footer>
    </div>
  );
};

export default Portfolio;
