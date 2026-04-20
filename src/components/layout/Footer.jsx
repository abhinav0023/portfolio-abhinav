import React from 'react';
import { Mail, Linkedin, Github, Cpu, ArrowRight } from 'lucide-react';

const Footer = ({ contact, name }) => {
  return (
    <footer id="contact" className="bg-secondary border-t-8 border-black pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          <div className="lg:col-span-7">
            <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] mb-12">
              Let's <span className="bg-white border-4 border-black px-4 rotate-2 inline-block">Work</span> Together.
            </h2>
            <p className="text-2xl md:text-3xl font-bold uppercase mb-16 max-w-2xl leading-tight">
              Ready for the next high-performance engineering mission.
            </p>

            <div className="flex flex-col gap-6">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="neo-btn flex justify-between items-center bg-accent text-white group"
                >
                  Email Me <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn flex justify-between items-center bg-white text-black group"
                >
                  LinkedIn <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-end">
            <div className="bg-black text-white p-12 border-4 border-black shadow-neo -rotate-3 hover:rotate-0 transition-transform cursor-crosshair">
               <h4 className="text-4xl font-black uppercase mb-4 text-secondary">Signal_Found</h4>
               <p className="text-sm font-bold uppercase tracking-widest leading-loose">
                 Location: 28.8955° N, 76.6066° E<br/>
                 Latency: 24ms<br/>
                 Encryption: AES-256
               </p>
            </div>
            
            <div className="text-right mt-12">
              <div className="text-3xl font-black uppercase tracking-tighter">
                {name} © {new Date().getFullYear()}
              </div>
              <div className="font-bold uppercase tracking-widest text-sm bg-accent text-white px-2 inline-block mt-2">
                SYS_VERSION_2.0
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-black uppercase tracking-widest">
            Built with Neo-Brutalism DNA
          </div>
          <div className="flex gap-12">
             <a href="#" className="font-black uppercase text-sm hover:underline decoration-4 decoration-accent underline-offset-4 text-black">Privacy</a>
             <a href="#" className="font-black uppercase text-sm hover:underline decoration-4 decoration-accent underline-offset-4 text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
