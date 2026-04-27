import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion as Motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';

const NAV_LINKS = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Work', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
];

const Header = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const { theme, toggle } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80);
  });

  // Track which section is currently in view for active nav highlighting.
  useEffect(() => {
    const sections = NAV_LINKS
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <Motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className="fixed top-4 left-0 right-0 z-[100] px-4 md:px-8"
    >
      <Motion.nav
        animate={{
          scale: scrolled ? 0.96 : 1,
          boxShadow: scrolled
            ? '8px 8px 0px 0px var(--neo-shadow, #000)'
            : '4px 4px 0px 0px var(--neo-shadow, #000)',
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        className="max-w-7xl mx-auto flex justify-between items-center bg-white dark:bg-black border-4 border-black dark:border-white py-2 px-6"
      >
        <div className="flex items-center gap-2">
          <div className="bg-secondary p-1 border-4 border-black dark:border-white rotate-3 hover:rotate-0 transition-transform">
            <a href="#" className="text-lg font-black uppercase tracking-tighter text-black">
              {name.split(' ')[0]}.
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs font-black uppercase tracking-widest px-2 py-1 border-2 transition-all text-black dark:text-white ${
                  isActive
                    ? 'bg-accent text-white border-black dark:border-white'
                    : 'border-transparent hover:bg-accent hover:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <Motion.span
                    layoutId="active-nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-black dark:bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 border-4 border-black dark:border-white bg-secondary dark:bg-black text-black dark:text-white shadow-neo-sm transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 border-4 border-black dark:border-white bg-secondary dark:bg-black text-black dark:text-white shadow-neo-sm transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-4 border-black dark:border-white bg-muted text-black dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Motion.nav>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-secondary border-4 border-black dark:border-white p-8 shadow-neo md:hidden text-black"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-black uppercase tracking-tighter hover:translate-x-2 transition-transform ${
                    activeId === link.id ? 'underline decoration-4 decoration-accent underline-offset-4' : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  );
};

export default Header;
