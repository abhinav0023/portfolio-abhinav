import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="py-32 px-4 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Credentials</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {certifications.map((cert, index) => (
            <div key={index} className="neo-card bg-white group hover:bg-secondary transition-colors">
              <div className="text-accent group-hover:text-black font-black uppercase tracking-widest text-xs mb-4">
                Credential_{index + 1} // {cert.issueDate}
              </div>
              <h3 className="text-4xl font-black uppercase leading-tight mb-4 text-foreground">
                {cert.name}
              </h3>
              <p className="text-xl font-bold uppercase opacity-80 mb-8 text-foreground">
                {cert.provider}
              </p>
              {cert.credentialId && (
                <div className="pt-6 border-t-4 border-black font-black uppercase text-xs tracking-widest opacity-40 text-black">
                  ID: {cert.credentialId}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
