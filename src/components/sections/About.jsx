import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const About = ({ about, highlights, highlightsTitle, tags }) => {
  return (
    <section id="about" className="py-14 md:py-24 lg:py-32 px-4 bg-white dark:bg-black relative overflow-hidden mb-10 md:mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <SectionTitle>About Me</SectionTitle>
          <ScrollReveal direction="left" duration={0.8}>
            <div className="bg-secondary p-6 sm:p-8 md:p-12 border-4 border-black dark:border-white shadow-neo -rotate-1 hover:rotate-0 transition-transform cursor-help">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-relaxed mb-6 sm:mb-8 text-black">
                {about}
              </p>
              <div className="h-3 sm:h-4 bg-black w-24 sm:w-32 mb-6 sm:mb-8"></div>
              <div className="flex gap-2 sm:gap-4 flex-wrap">
                {tags.map((tag, i) => (
                  <ScrollReveal
                    key={tag}
                    direction="pop"
                    delay={0.1 + i * 0.06}
                    duration={0.5}
                    as="span"
                    className="bg-white dark:bg-black dark:text-white px-3 py-0.5 sm:px-4 sm:py-1 border-2 sm:border-4 border-black dark:border-white font-bold uppercase text-xs sm:text-sm inline-block"
                  >
                    {tag}
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 relative h-full flex flex-col justify-center gap-4 md:gap-8">
          {highlightsTitle ? (
            <ScrollReveal direction="right" duration={0.6}>
              <div className="relative mb-2 inline-block self-start">
                <span className="relative z-10 text-sm sm:text-base md:text-xl font-black uppercase tracking-tight px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white dark:bg-black dark:text-white border-2 sm:border-4 border-black dark:border-white shadow-neo-sm -rotate-1 inline-block">
                  {highlightsTitle}
                </span>
              </div>
            </ScrollReveal>
          ) : null}
          {highlights.map((item, i) => (
            <ScrollReveal
              key={`highlight-${i}`}
              direction="right"
              delay={0.15 + i * 0.12}
              duration={0.7}
            >
              <div
                className={`neo-card ${
                  i === 0
                    ? 'bg-accent text-black rotate-3'
                    : 'bg-muted text-black -rotate-2 ml-6 sm:ml-12'
                }`}
              >
                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-black leading-snug tracking-tight">
                  {item.title}
                </blockquote>
                {item.subtitle?.trim() ? (
                  <p className="mt-3 font-bold uppercase tracking-widest text-sm text-black/80">
                    {item.subtitle}
                  </p>
                ) : null}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
