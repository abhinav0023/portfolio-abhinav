import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import { portfolioData } from '../data/portfolioData';

const Home = () => {
  const { personalInfo, contact, skills, experience, projects, education, certifications } = portfolioData;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <Header name={personalInfo.name} />
      
      <main>
        <Hero 
          name={personalInfo.name} 
          headline={personalInfo.headline} 
        />
        
        <About about={personalInfo.about} />
        
        <Experience experience={experience} />

        <Education education={education} />
        
        <Skills skills={skills} />
        
        <Projects projects={projects} />

        <Certifications certifications={certifications} />
      </main>

      <Footer contact={contact} name={personalInfo.name} />
    </div>
  );
};

export default Home;
