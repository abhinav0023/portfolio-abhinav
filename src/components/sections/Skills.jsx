import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const Skills = ({ skills }) => {
  const allSkills = skills ? Object.values(skills).flat() : [];

  return (
    <section id="skills" className="py-32 bg-white border-t-8 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <SectionTitle>Skillset</SectionTitle>
      </div>

      {/* Primary Marquee (Custom CSS Implementation) */}
      <div className="bg-secondary py-10 border-y-4 border-black rotate-1 scale-105 mb-24 overflow-hidden flex">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
            <div key={i} className="flex items-center">
              <span className="text-5xl md:text-7xl font-black uppercase mx-8">
                {skill}
              </span>
              <div className="w-6 h-6 bg-black rounded-full mx-4"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills && Object.entries(skills).map(([category, items], idx) => (
          <div 
            key={category} 
            className={`neo-card ${idx % 2 === 0 ? 'bg-white' : 'bg-muted'} rotate-${(idx % 3) - 1}`}
          >
            <h3 className="text-3xl font-black mb-6 uppercase bg-black text-white px-4 py-1 inline-block">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white border-4 border-black font-bold text-sm uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
