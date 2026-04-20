import React from 'react';
import { motion as Motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "100%", delay = 0 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.215, 0.61, 0.355, 1] 
      }}
      style={{ width }}
    >
      {children}
    </Motion.div>
  );
};

export default ScrollReveal;
