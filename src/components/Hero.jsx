import React from 'react';
import { Github, Linkedin, Download, FileText, Code, TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import refinedProfile from '../assets/simple_circular_profile.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-12 overflow-hidden">
      <div className="section-padding grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-primary font-medium tracking-wider glow-text uppercase">Hello There!</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Anamika Sharma</span></h1>
          <h2 className="text-xl md:text-2xl text-white/80 font-medium mb-6">Aspiring Software Developer | Data Science Enthusiast</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl leading-relaxed">Building real-world software and data-driven solutions while continuously learning and exploring modern technologies.</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="/CV AnamikaSharma.pdf#toolbar=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary flex items-center gap-2"
            >
              Preview Resume <FileText size={18} />
            </a>
            <a 
              href="/CV AnamikaSharma.pdf" 
              download="Anamika_Sharma_CV.pdf" 
              className="btn-outline flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/ANA01SHARMA" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-white/70 hover:text-primary transition-colors hover:scale-110 duration-300"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/anamika01sharma/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-white/70 hover:text-primary transition-colors hover:scale-110 duration-300"><Linkedin size={24} /></a>
          </div>
        </motion.div>

        <motion.div className="relative flex justify-center py-10" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          {/* Main Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-[120px] animate-pulse-glow" />
          
          {/* Central Profile Image Container */}
          <div className="relative z-20 w-full max-w-[420px] aspect-square rounded-full overflow-hidden border-2 border-white/5 shadow-2xl p-2 bg-[#0A0A0A]">
             <img src={refinedProfile} alt="Anamika Sharma" className="w-full h-full object-cover rounded-full scale-110" />
          </div>


          {/* Badge: Open to Opportunities (Centered at Bottom) */}
          <motion.div 
            className="absolute -bottom-6 left-0 right-0 mx-auto w-fit z-30 glass-card py-2 px-6 rounded-2xl flex items-center gap-3 border border-white/10 shadow-2xl min-w-[260px]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
              <Target size={20} />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Status</p>
              <p className="text-sm font-bold text-white">Open to Opportunities</p>
            </div>
          </motion.div>

          {/* Extra Background Glows - Enhanced Visibility */}
          <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-80 h-80 bg-accent/30 blur-[100px] animate-pulse-glow" />
          <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-80 h-80 bg-primary/30 blur-[100px] animate-pulse-glow" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/20 blur-[80px] animate-glow-slow" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 blur-[80px] animate-glow-slow" />
        </motion.div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] -z-10" />
    </section>
  );
};

export default Hero;
