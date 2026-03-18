import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import ExtraCurricular from './components/ExtraCurricular';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-white selection:bg-primary/30 min-h-screen">
      <div className="glow-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certificates />
        <Achievements />
        <ExtraCurricular />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
