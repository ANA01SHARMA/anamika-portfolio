import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Code2, Award, ChevronRight, BarChart3, Target } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">Achievements</h2>
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
              <Trophy size={200} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side: Icon */}
                <div className="flex-shrink-0 flex items-start justify-center lg:justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Code2 className="text-primary" size={32} />
                  </div>
                </div>

                {/* Center: Content */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      Solving Problems on LeetCode
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50 text-sm">
                      <span className="flex items-center gap-1.5"><ExternalLink size={16} className="text-primary" /> LeetCode Platform</span>
                      <span className="flex items-center gap-1.5"><Target size={16} className="text-secondary" /> Competitive Programming</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-base leading-relaxed border-l-2 border-primary/30 pl-4 py-1 bg-white/[0.01]">
                    Consistently solving algorithmic challenges focused on <span className="text-primary font-medium">Data Structures</span>, <span className="text-secondary font-medium">Dynamic Programming</span>, and <span className="text-accent font-medium">Graph Theory</span>. Mastering complex problem-solving patterns to improve coding efficiency and logical thinking.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <Award size={14} className="text-primary" /> Solved Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Array', 'String', 'Hash Table', 'Dynamic Programming', 'Math', 'Sorting', 'Greedy'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Stats */}
                <div className="lg:w-64 flex-shrink-0 space-y-4 lg:border-l lg:border-white/5 lg:pl-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <BarChart3 size={14} className="text-secondary" /> Performance
                  </h4>
                  <div className="space-y-4 text-white/70">
                    <div className="text-xs">
                      <span className="block text-white/40 mb-1 uppercase tracking-tighter">Problems Solved</span>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-white">200+</span>
                        <span className="text-emerald-500 text-[10px] mb-1 font-bold flex items-center"><ChevronRight size={10} /> Milestone</span>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="block text-white/40 mb-1 uppercase tracking-tighter">Consistency</span>
                      <span className="text-white font-medium">Regular Problem Solving</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/5">
                <a 
                  href="https://leetcode.com/u/Anamika_011/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
                >
                  <Trophy size={18} /> View LeetCode Profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
