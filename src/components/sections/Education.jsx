import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-14 md:py-24 lg:py-32 px-4 bg-white dark:bg-black relative mb-10 md:mb-0">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Education</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 mt-4 md:mt-8 lg:mt-12">
          {education.map((edu, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
              duration={0.7}
            >
              <div className={`neo-card ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                <div className="bg-secondary px-3 py-1 border-4 border-black dark:border-white inline-block mb-4 font-black uppercase text-xs text-black">
                  {edu.duration}
                </div>
                <h3 className="text-3xl font-black uppercase leading-tight mb-4 group-hover:text-accent transition-colors text-foreground">
                  {edu.institution}
                </h3>
                <p className="text-xl font-bold uppercase underline decoration-accent decoration-4 underline-offset-4 mb-8">
                  {edu.degree}
                </p>
                {edu.skills && (
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black border-4 border-black dark:border-white font-black uppercase text-[10px] tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
