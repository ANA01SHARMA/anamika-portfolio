import React from 'react';
import { motion } from 'framer-motion';
import { Database, ExternalLink, FileText, Calendar, MapPin, Award, Building2 } from 'lucide-react';

const Training = () => {
  return (
    <section id="training" className="section-padding relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2 drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">Professional Training</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative p-[1px] rounded-3xl transition-all duration-300"
        >
          {/* Glowing Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 rounded-3xl" />
          
          <div className="relative bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/5 h-full overflow-hidden">
            {/* Background Icon Watermark */}
            <div className="absolute -bottom-10 -right-10 p-8 text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700">
              <Award size={200} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side: Icon */}
                <div className="flex-shrink-0 flex items-start justify-center lg:justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Database className="text-primary" size={32} />
                  </div>
                </div>

                {/* Center: Content */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      Java & MySQL Application Development
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50 text-sm">
                      <span className="flex items-center gap-1.5"><Building2 size={16} className="text-primary" /> Lovely Professional University</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} className="text-secondary" /> Phagwara, India</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-base leading-relaxed border-l-2 border-primary/30 pl-4 py-1 bg-white/[0.01]">
                    Hands-on training in Java and MySQL application development covering <span className="text-primary font-medium">object-oriented programming</span> principles and <span className="text-secondary font-medium">JDBC connectivity</span>. Built applications integrating MySQL for efficient data storage and retrieval.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <Award size={14} className="text-primary" /> Skill Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['OOP Principles', 'JDBC Connectivity', 'Database Integration'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Timeline */}
                <div className="lg:w-64 flex-shrink-0 space-y-4 lg:border-l lg:border-white/5 lg:pl-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <Calendar size={14} className="text-secondary" /> Timeline
                  </h4>
                  <div className="space-y-3 text-white/70">
                    <div className="text-xs">
                      <span className="block text-white/40 mb-1 uppercase tracking-tighter">Duration</span>
                      <span className="text-white font-medium">10 June – 22 July 2025</span>
                    </div>
                    <div className="text-xs">
                      <span className="block text-white/40 mb-1 uppercase tracking-tighter">Issued</span>
                      <span className="text-white font-medium">13 August 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/5">
                <a 
                  href="/Java and MySQL_Application Development.pdf#toolbar=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
                >
                  <FileText size={18} /> View Certificate
                </a>
                <a 
                  href="https://github.com/ANA01SHARMA/Chat-Server-using-Java" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/5 text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  <ExternalLink size={18} /> View Project
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
