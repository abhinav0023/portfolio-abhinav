import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const Skills = ({ skills }) => {
  const allSkills = skills ? Object.values(skills).flat() : [];

  return (
    <section id="skills" className="py-14 md:py-24 lg:py-32 bg-white dark:bg-black border-t-4 sm:border-t-8 border-black dark:border-white relative overflow-hidden mb-10 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-14 lg:mb-20">
        <SectionTitle>Skillset</SectionTitle>
      </div>

      {/* Primary Marquee (Custom CSS Implementation) */}
      <div className="bg-secondary py-6 sm:py-10 border-y-4 border-black dark:border-white rotate-1 scale-100 sm:scale-105 mb-10 sm:mb-16 md:mb-24 overflow-hidden flex text-black">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
            <div key={i} className="flex items-center">
              <span className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase mx-3 sm:mx-6 md:mx-8">
                {skill}
              </span>
              <div className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-black dark:bg-white rounded-full mx-2 sm:mx-3 md:mx-4 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {skills &&
          Object.entries(skills).map(([category, items], idx) => {
            const tilts = ['-rotate-1', 'rotate-2', 'rotate-1', '-rotate-2'];
            const tilt = tilts[idx % tilts.length];
            return (
          <div
            key={category}
            className={`neo-card ${idx % 2 === 0 ? 'bg-white dark:bg-black' : 'bg-muted'} ${tilt}`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 uppercase bg-black text-white dark:bg-white dark:text-black px-3 py-1 sm:px-4 inline-block">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white dark:bg-black dark:text-white border-2 sm:border-4 border-black dark:border-white font-bold text-xs sm:text-sm uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
