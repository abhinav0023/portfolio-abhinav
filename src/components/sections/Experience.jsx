import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const DEFAULT_SUMMARY =
  'Driven and focused performance. Implementing scalable frontend infrastructure and optimizing deployment protocols.';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-14 md:py-24 lg:py-32 px-4 bg-muted/20 dark:bg-black border-y-4 sm:border-y-8 border-black dark:border-white mb-10 md:mb-0">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Work History</SectionTitle>

        <div className="space-y-6 md:space-y-10 lg:space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
              <div className="bg-secondary p-4 border-4 border-black dark:border-white shadow-neo-sm font-black rotate-2 group-hover:rotate-0 transition-transform text-black">
                {exp.duration}
              </div>
              
              <div className="neo-card flex-grow group-hover:bg-white dark:group-hover:bg-black transition-colors">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-black uppercase text-accent">
                      {exp.role}
                    </h3>
                    <div className="text-xl font-bold uppercase underline decoration-4 decoration-secondary underline-offset-4">
                      @ {exp.company}
                    </div>
                  </div>
                  <div className="bg-black text-white dark:bg-white dark:text-black px-4 py-1 border-4 border-black dark:border-white text-xs font-black uppercase tracking-widest">
                    {exp.type}
                  </div>
                </div>

                {Array.isArray(exp.bullets) && exp.bullets.length > 0 ? (
                  <ul className="text-lg font-bold opacity-80 leading-snug list-disc pl-5 space-y-2 marker:text-accent">
                    {exp.bullets.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg font-bold opacity-80 leading-snug">
                    {exp.summary ?? DEFAULT_SUMMARY}
                  </p>
                )}
                
                <div className="mt-8 flex gap-2">
                   <div className="h-4 w-4 bg-accent border-2 border-black dark:border-white"></div>
                   <div className="h-4 w-4 bg-secondary border-2 border-black dark:border-white"></div>
                   <div className="h-4 w-4 bg-muted border-2 border-black dark:border-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
