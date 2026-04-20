import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <div className="relative mb-8 md:mb-14 lg:mb-20 inline-block">
      <div className="absolute -inset-2 bg-secondary border-4 border-black dark:border-white -rotate-2 z-0"></div>
      <h2 className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-black dark:text-white border-4 border-black dark:border-white shadow-neo-sm">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
