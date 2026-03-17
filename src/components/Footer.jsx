import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">Anamika Sharma</p>
          <p className="text-white/40 text-sm tracking-widest font-medium uppercase">© 2026 Aspiring Software Developer</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/ANA01SHARMA" target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/anamika01sharma/" target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:anamikasharma012005@gmail.com" className="p-2 text-white/40 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-white/40 text-sm">Built with <span className="text-accent">♥</span> using React & Tailwind</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
              backgroundColor: "rgba(139, 92, 246, 0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white shadow-2xl z-50 group transition-colors"
            title="Back to Top"
          >
            <ChevronUp size={24} className="group-hover:text-primary transition-colors" />
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 blur-md rounded-full transition-opacity" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
