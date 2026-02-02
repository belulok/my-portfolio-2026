import React from 'react';
import Header from './components/Header';
import SideMedia from './components/SideMedia';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Articles from './components/Articles';
import Videos from './components/Videos';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <InteractiveBackground />
      <div className="container">
        <Header />
        <SideMedia />
        <Hero />
        <Quote />
        <Projects />
        <Hackathons />
        <Articles />
        <Videos />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;