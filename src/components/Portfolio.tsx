import React from 'react';
import Hero from './Hero';
import RecentWork from './RecentWork';
import Experience from './Experience';
import Services from './Services';
import Benefits from './Benefits';
import Contact from './Contact';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RecentWork />
      <Experience />
      <Services />
      <Benefits />
      <Contact />
    </div>
  );
};

export default Portfolio;