import React from 'react';
import { motion as Motion, useScroll, useSpring } from 'framer-motion';

/**
 * Fixed top progress bar that tracks page scroll.
 * Neo-brutalist accent stripe sitting just above the floating header.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <Motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[200] h-[6px] origin-left bg-accent border-b-2 border-black dark:border-white"
    />
  );
};

export default ScrollProgress;
