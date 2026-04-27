import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = ({ headline }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);
  const headlineScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const halftoneY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const starRotateRaw = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const starRotate = useSpring(starRotateRaw, { stiffness: 120, damping: 20, mass: 0.4 });
  const starY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-0 md:min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24 pb-10 md:pt-32 md:pb-20 mb-10 md:mb-0"
    >
      <Motion.div
        style={{ y: halftoneY }}
        className="absolute inset-0 bg-halftone pointer-events-none"
      />

      <Motion.div
        style={{ rotate: starRotate, y: starY }}
        className="absolute top-28 right-4 md:right-12 lg:right-16 z-20 hidden lg:block pointer-events-none"
        aria-hidden
      >
        <Star size={120} className="fill-secondary border-4 border-black dark:border-white p-4 bg-white dark:bg-black" />
      </Motion.div>

      <Motion.div
        style={{ y: headlineY, opacity: headlineOpacity, scale: headlineScale }}
        className="max-w-4xl xl:max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center text-center"
      >
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="space-y-6 flex flex-col items-center"
        >
          <Motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 14 }}
            className="inline-block bg-accent text-white px-4 py-1 border-4 border-black dark:border-white shadow-neo-sm font-black uppercase tracking-widest text-sm"
          >
            NEW VERSION 2026.0
          </Motion.div>

          <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.8] mb-4 md:mb-8 flex flex-col items-center">
            <Motion.span
              initial={{ opacity: 0, x: -120, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="bg-secondary border-4 border-black dark:border-white px-4 py-2 inline-block mb-2 text-black"
            >
              ABHINAV.
            </Motion.span>
            <Motion.span
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-outline"
            >
              HOODA
            </Motion.span>
          </h1>

          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-2xl md:text-4xl font-bold max-w-2xl leading-tight"
          >
            {headline}
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-wrap gap-4 sm:gap-6 pt-8 md:pt-12 justify-center"
          >
            <a href="#projects" className="neo-btn scale-110">
              View Experiments
            </a>
            <a href="#contact" className="neo-btn bg-white text-black dark:bg-black dark:text-white">
              Send Message
            </a>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;
