import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ExternalLink, Calendar, MapPin, X, FileText, Star, Rocket } from 'lucide-react';
import awsBadge from '../assets/aws_workshop_badge.png';
import webHackathonCert from '../assets/web_ka_hackathon_cert.png';

const ExtraCurricular = () => {
  const [modalImage, setModalImage] = useState(null);

  const activities = [
    {
      title: "AI/ML Workshop at AWS SCD Jalandhar 2025",
      org: "Amazon Web Services (AWS)",
      date: "December 2025",
      location: "Jalandhar, Punjab",
      desc: "Participated in the AI/ML Workshop at AWS Student Community Day (SCD) Jalandhar 2025, covering ML workflows, model building, AWS SageMaker, and earning a Credly badge.",
      image: awsBadge,
      link: "https://www.credly.com/badges/9a43e63d-7fcc-42de-8adc-6bfaddc4ffbd/public_url",
      icon: <Rocket className="text-primary" />,
      tags: ["AI/ML", "AWS", "Cloud Computing", "SCD 2025"]
    },
    {
      title: "Web Ka Hackathon",
      org: "Lovely Professional University",
      date: "March 2024",
      location: "Phagwara, Punjab",
      desc: "Completed the 24-hour Web Ka Hackathon organized at Lovely Professional University, focused on full-stack development and real-time problem solving.",
      image: webHackathonCert,
      link: "https://drive.google.com/file/d/19im1V7Il7QMuDD6F5pcrtKHsfEs2XY58/view?usp=sharing",
      icon: <Trophy className="text-secondary" />,
      tags: ["Hackathon", "Web Development", "Team Work", "Problem Solving"]
    }
  ];

  return (
    <section id="activities" className="py-12 md:py-16 relative overflow-hidden bg-black/20">
      {/* Background Decorative Glow (Similar to Achievements) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2 uppercase tracking-wider drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">Extra-Curricular Activities</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-[1px] rounded-2xl transition-all duration-300"
          >
            {/* Glowing Gradient Border (Achievements Style) */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 rounded-2xl" />
            
            <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/5 group-hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Background Icon Watermark */}
              <div className="absolute -bottom-6 -right-6 p-4 text-white/[0.01] group-hover:text-primary/[0.04] transition-colors duration-700 pointer-events-none">
                {React.cloneElement(item.icon, { size: 120 })}
              </div>

              <div className="p-6 flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-white/5 active:scale-95 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  {/* Image Preview */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setModalImage(item.image)}
                    className="shrink-0 w-20 h-20 rounded-xl overflow-hidden cursor-pointer group/img border border-white/10 hidden sm:block shadow-lg"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain bg-white/[0.02]"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[8px] font-bold text-white uppercase text-center p-1">View Full</div>
                  </motion.div>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-white/40 text-xs">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {item.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={12} /> {item.location}</span>
                  <span className="flex items-center gap-1.5"><FileText size={12} /> {item.org}</span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {item.desc}
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold uppercase tracking-wider text-white/50 group-hover:text-primary group-hover:border-primary/20 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-grow py-2.5 bg-primary/10 hover:bg-primary border border-primary/20 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/5"
                    >
                      <ExternalLink size={14} /> Verify
                    </a>
                    <button 
                      onClick={() => setModalImage(item.image)}
                      className="px-4 py-2.5 bg-white/5 text-white text-xs font-bold rounded-lg flex items-center gap-2 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02] active:scale-95"
                    >
                      <Star size={14} className="text-secondary" /> Credential
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:bg-white hover:text-black rounded-full transition-all"
              >
                <X size={24} />
              </button>
              <img 
                src={modalImage} 
                alt="Credential View" 
                className="w-full h-auto max-h-[85vh] object-contain p-2"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExtraCurricular;
