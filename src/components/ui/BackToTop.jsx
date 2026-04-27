import React from 'react';
import { motion as Motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * Floating neo-brutalist "back to top" button. Becomes visible after the
 * user has scrolled past ~60% of the first viewport.
 */
const BackToTop = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 600);
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <Motion.button
          type="button"
          onClick={handleClick}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          whileHover={{ rotate: -6, scale: 1.05 }}
          whileTap={{ scale: 0.92, x: 2, y: 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="fixed bottom-6 right-6 z-[150] p-3 sm:p-4 bg-secondary text-black border-4 border-black dark:border-white shadow-neo-sm hover:shadow-neo transition-shadow"
        >
          <ArrowUp size={22} strokeWidth={3} />
        </Motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
