import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-14 md:py-24 lg:py-32 px-4 max-w-7xl mx-auto mb-10 md:mb-0">
      <SectionTitle>Top Experiments</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="neo-card group flex flex-col min-h-0 md:min-h-[420px] lg:min-h-[450px]"
          >
            <div className="bg-muted p-4 border-black border-b-4 -mx-5 -mt-5 sm:-mx-8 sm:-mt-8 mb-6 sm:mb-8 flex justify-between items-center">
              <span className="font-black uppercase tracking-widest text-xs">Project_{index + 1}</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full bg-secondary border-2 border-black"></div>
              </div>
            </div>

            <h3 className="text-4xl font-black mb-4 uppercase leading-none group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            
            <p className="text-lg font-bold mb-8 opacity-80 grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-secondary text-xs font-black uppercase border-2 border-black"
                >
                  #{tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="neo-btn w-full flex justify-center items-center gap-2 group-hover:bg-black group-hover:text-white"
            >
              Live Demo <ArrowUpRight size={20} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
