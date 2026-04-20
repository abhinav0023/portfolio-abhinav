import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-32 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Education</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {education.map((edu, index) => (
            <div key={index} className={`neo-card ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
              <div className="bg-secondary px-3 py-1 neo-border inline-block mb-4 font-black uppercase text-xs">
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
                    <span key={skill} className="px-3 py-1 bg-black text-white neo-border font-black uppercase text-[10px] tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
