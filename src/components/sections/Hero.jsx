import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = ({ headline }) => {
  return (
    <section className="relative min-h-0 md:min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24 pb-10 md:pt-32 md:pb-20 mb-10 md:mb-0">
      <div className="absolute inset-0 bg-halftone pointer-events-none" />

      <Motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-28 right-4 md:right-12 lg:right-16 z-20 hidden lg:block pointer-events-none"
        aria-hidden
      >
        <Star size={120} className="fill-secondary border-4 border-black p-4 bg-white" />
      </Motion.div>

      <div className="max-w-4xl xl:max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 flex flex-col items-center"
        >
          <div className="inline-block bg-accent text-white px-4 py-1 border-4 border-black shadow-neo-sm rotate-1 font-black uppercase tracking-widest text-sm">
            NEW VERSION 2026.0
          </div>

          <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.8] mb-4 md:mb-8 flex flex-col items-center">
            <span className="bg-secondary border-4 border-black px-4 py-2 -rotate-1 inline-block mb-2">
              ABHINAV.
            </span>
            <span className="text-outline">HOODA</span>
          </h1>

          <p className="text-2xl md:text-4xl font-bold max-w-2xl leading-tight">
            {headline}
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 pt-8 md:pt-12 justify-center">
            <a href="#projects" className="neo-btn scale-110">
              View Experiments
            </a>
            <a href="#contact" className="neo-btn bg-white text-black">
              Send Message
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
