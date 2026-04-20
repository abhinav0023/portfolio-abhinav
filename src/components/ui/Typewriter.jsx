import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Typewriter = ({ text, speed = 30, delay = 0, className = "", cursor = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let index = 0;
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayedText(text.slice(0, index));
          index++;
          if (index > text.length) {
            clearInterval(interval);
            setIsComplete(true);
          }
        }, speed);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [text, speed, delay, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {cursor && !isComplete && <span className="cursor-blink">_</span>}
    </span>
  );
};

export default Typewriter;
