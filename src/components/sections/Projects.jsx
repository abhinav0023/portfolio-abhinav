import React from 'react';
import { motion as Motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { ArrowUpRight } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-14 md:py-24 lg:py-32 px-4 max-w-7xl mx-auto mb-10 md:mb-0 text-foreground">
      <SectionTitle>Top Experiments</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
        {projects.map((project, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 80, rotate: index % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: (index % 3) * 0.12,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="neo-card group flex flex-col min-h-0 md:min-h-[420px] lg:min-h-[450px]"
          >
            <div className="bg-muted p-4 border-black dark:border-white border-b-4 -mx-5 -mt-5 sm:-mx-8 sm:-mt-8 mb-6 sm:mb-8 flex justify-between items-center text-black">
              <span className="font-black uppercase tracking-widest text-xs">Project_{index + 1}</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-black dark:border-white"></div>
                <div className="w-3 h-3 rounded-full bg-secondary border-2 border-black dark:border-white"></div>
              </div>
            </div>

            <h3 className="text-4xl font-black mb-4 uppercase leading-none group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-lg font-bold mb-8 opacity-80 grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <Motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 3) * 0.12 + 0.3 + i * 0.04,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="px-2 py-1 bg-secondary text-xs font-black uppercase border-2 border-black dark:border-white text-black inline-block"
                >
                  #{tech}
                </Motion.span>
              ))}
            </div>

            <a
              href={project.link}
              className="neo-btn w-full flex justify-center items-center gap-2 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black"
            >
              Live Demo <ArrowUpRight size={20} />
            </a>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
