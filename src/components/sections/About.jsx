import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const About = ({ about }) => {
  return (
    <section id="about" className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <SectionTitle>About Me</SectionTitle>
          <div className="bg-secondary p-12 border-4 border-black shadow-neo -rotate-1 hover:rotate-0 transition-transform cursor-help">
            <p className="text-2xl md:text-3xl font-black uppercase leading-[1.1] mb-8 text-black">
              {about}
            </p>
            <div className="h-4 bg-black w-32 mb-8"></div>
            <div className="flex gap-4 flex-wrap">
              {['UX Specialist', 'DevOps Eng', 'Fullstack', 'Agile'].map(tag => (
                <span key={tag} className="bg-white px-4 py-1 border-4 border-black font-bold uppercase text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-full flex flex-col justify-center gap-8">
          <div className="neo-card bg-accent text-white rotate-3">
             <h4 className="text-4xl font-black mb-2">100%</h4>
             <p className="font-bold uppercase tracking-widest text-sm text-white">Signal Integrity</p>
          </div>
          <div className="neo-card bg-muted text-black -rotate-2 ml-12">
             <h4 className="text-4xl font-black mb-2">LIVE</h4>
             <p className="font-bold uppercase tracking-widest text-sm text-black">Feedback Loop</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
