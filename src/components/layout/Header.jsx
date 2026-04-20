import React, { useState } from 'react';
import { Menu, X, Star, Sun, Moon } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';

const Header = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] px-4 md:px-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center bg-white dark:bg-black border-4 border-black dark:border-white py-2 px-6 shadow-neo-sm">
        <div className="flex items-center gap-2">
          <div className="bg-secondary p-1 border-4 border-black dark:border-white rotate-3 hover:rotate-0 transition-transform">
            <a href="#" className="text-lg font-black uppercase tracking-tighter text-black">
              {name.split(' ')[0]}.
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-white px-2 border-2 border-transparent hover:border-black dark:hover:border-white transition-all text-black dark:text-white"
            >
              {link.name}
            </a>
          ))}
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
      </nav>

      <AnimatePresence>
        {isOpen && (
          <Motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-secondary border-4 border-black dark:border-white p-8 shadow-neo md:hidden text-black"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter hover:translate-x-2 transition-transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
