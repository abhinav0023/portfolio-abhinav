import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = ({ name, headline }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-32 pb-20">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-halftone pointer-events-none"></div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-8">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-block bg-accent text-white px-4 py-1 border-4 border-black shadow-neo-sm rotate-1 font-black uppercase tracking-widest text-sm">
              NEW VERSION 2026.0
            </div>
            
            <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.8] mb-8">
              <span className="block bg-secondary border-4 border-black px-4 py-2 -rotate-1 inline-block mb-2">
                ABHINAV.
              </span>
              <span className="block text-outline">HOODA</span>
            </h1>

            <p className="text-2xl md:text-4xl font-bold max-w-2xl leading-tight">
              {headline}
            </p>

            <div className="flex flex-wrap gap-6 pt-12">
              <a href="#projects" className="neo-btn scale-110">
                View Experiments
              </a>
              <a href="#contact" className="neo-btn bg-white text-black">
                Send Message
              </a>
            </div>
          </Motion.div>
        </div>

        <div className="lg:col-span-4 flex items-center justify-center relative">
          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 hidden lg:block"
          >
            <Star size={120} className="fill-secondary border-4 border-black p-4 bg-white" />
          </Motion.div>
          
          <div className="bg-muted border-4 border-black p-12 neo-shadow rotate-3 hover:rotate-0 transition-transform cursor-pointer">
            <h3 className="text-4xl font-black uppercase">Availability</h3>
            <p className="text-xl font-bold mt-4">Currently Open for<br/>Collaborations.</p>
            <div className="mt-8 h-2 bg-black w-full"></div>
            <p className="mt-4 font-black uppercase tracking-widest text-sm">Status: High Signal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
