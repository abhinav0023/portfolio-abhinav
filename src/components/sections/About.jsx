import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const About = ({ about, highlights, highlightsTitle, tags }) => {
  return (
    <section id="about" className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <SectionTitle>About Me</SectionTitle>
          <div className="bg-secondary p-12 border-4 border-black shadow-neo -rotate-1 hover:rotate-0 transition-transform cursor-help">
            <p className="text-lg md:text-xl font-bold leading-relaxed mb-8 text-black whitespace-pre-line">
              {about}
            </p>
            <div className="h-4 bg-black w-32 mb-8"></div>
            <div className="flex gap-4 flex-wrap">
              {tags.map((tag) => (
                <span key={tag} className="bg-white px-4 py-1 border-4 border-black font-bold uppercase text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-full flex flex-col justify-center gap-8">
          {highlightsTitle ? (
            <div className="relative mb-2 inline-block self-start">
              <span className="relative z-10 text-lg md:text-xl font-black uppercase tracking-tight px-3 py-2 bg-white border-4 border-black shadow-neo-sm -rotate-1">
                {highlightsTitle}
              </span>
            </div>
          ) : null}
          {highlights.map((item, i) => (
            <div
              key={`highlight-${i}`}
              className={`neo-card ${
                i === 0
                  ? 'bg-accent text-black rotate-3'
                  : 'bg-muted text-black -rotate-2 ml-12'
              }`}
            >
              <blockquote className="text-lg sm:text-xl md:text-2xl font-black leading-snug tracking-tight">
                {item.title}
              </blockquote>
              {item.subtitle?.trim() ? (
                <p className="mt-3 font-bold uppercase tracking-widest text-sm text-black/80">
                  {item.subtitle}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
