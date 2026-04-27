import React from 'react';
import { motion as Motion } from 'framer-motion';

const SectionTitle = ({ children }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative mb-8 md:mb-14 lg:mb-20 inline-block"
    >
      <Motion.div
        initial={{ rotate: 0, scale: 0.85 }}
        whileInView={{ rotate: -2, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
        className="absolute -inset-2 bg-secondary border-4 border-black dark:border-white z-0"
      />
      <h2 className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-black dark:text-white border-4 border-black dark:border-white shadow-neo-sm">
        {children}
      </h2>
    </Motion.div>
  );
};

export default SectionTitle;
