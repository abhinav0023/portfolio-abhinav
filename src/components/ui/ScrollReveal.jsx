import React from 'react';
import { motion as Motion } from 'framer-motion';

const VARIANTS = {
  up:    { hidden: { opacity: 0, y: 60 },             show: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -60 },            show: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -80 },            show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 80 },             show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 },       show: { opacity: 1, scale: 1 } },
  pop:   { hidden: { opacity: 0, scale: 0.6, rotate: -6 }, show: { opacity: 1, scale: 1, rotate: 0 } },
};

const DEFAULT_EASE = [0.215, 0.61, 0.355, 1];

/**
 * Scroll-triggered reveal wrapper.
 * Props:
 *  - direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'pop'
 *  - delay, duration: numbers (seconds)
 *  - amount: viewport intersection threshold (0..1)
 *  - once: only animate first time entering viewport
 *  - as: element type ("div" by default)
 */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  once = true,
  className,
  as = 'div',
  width,
  ...rest
}) => {
  const variants = VARIANTS[direction] ?? VARIANTS.up;
  const MotionTag = Motion[as] ?? Motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: DEFAULT_EASE }}
      style={width ? { width } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default ScrollReveal;
