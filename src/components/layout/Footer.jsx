import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = ({ contact, name }) => {
  return (
    <footer id="contact" className="bg-secondary border-t-4 sm:border-t-8 border-black dark:border-white pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 md:gap-20 lg:gap-24 mb-16 md:mb-24 lg:mb-32">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase leading-[0.8] mb-8 md:mb-12">
              Let's <span className="bg-white dark:bg-black dark:text-white border-4 border-black dark:border-white px-4 rotate-2 inline-block">Work</span> Together.
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl font-bold uppercase mb-10 md:mb-16 max-w-2xl leading-tight">
              Ready for the next high-performance engineering mission.
            </p>

            <div className="flex flex-col gap-4 sm:gap-6 items-start">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="neo-btn inline-flex w-fit max-w-full items-center gap-4 sm:gap-6 bg-accent text-white group shrink-0"
                >
                  <span>Email Me</span>
                  <ArrowRight className="shrink-0 group-hover:translate-x-2 transition-transform" size={20} />
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn inline-flex w-fit max-w-full items-center gap-4 sm:gap-6 bg-white text-black dark:bg-black dark:text-white group shrink-0"
                >
                  <span>LinkedIn</span>
                  <ArrowRight className="shrink-0 group-hover:translate-x-2 transition-transform" size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t-4 border-black dark:border-white flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm font-black uppercase tracking-widest">
            <span>Built with Neo-Brutalism DNA</span>
            <span className="text-black/70">
              {name} © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-12">
             <a href="#" className="font-black uppercase text-sm hover:underline decoration-4 decoration-accent underline-offset-4 text-black">Privacy</a>
             <a href="#" className="font-black uppercase text-sm hover:underline decoration-4 decoration-accent underline-offset-4 text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
