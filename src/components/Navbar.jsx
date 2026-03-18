import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Activities', href: '#activities' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.name.toLowerCase());
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 w-full z-50 px-6 flex justify-center pointer-events-none">
      <div className={`pointer-events-auto flex items-center justify-between gap-12 px-4 py-2 rounded-full transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-white/5 backdrop-blur-sm border border-white/10'}`}>
        {/* Logo with Circle */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
            AS
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block">
            Anamika.
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-sm font-medium transition-all hover:text-primary relative py-1 ${activeSection === item.name.toLowerCase() ? 'text-primary' : 'text-white/70'}`}
            >
              {item.name}
              {activeSection === item.name.toLowerCase() && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block btn-primary !py-2 !px-5 text-sm whitespace-nowrap">
            Contact Me
          </a>
          <button 
            className="lg:hidden p-2 text-white hover:text-primary transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Floating as well) */}
        <div className={`lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[calc(100vw-3rem)] max-w-sm glass rounded-3xl transition-all duration-300 ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
          <div className="p-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`text-lg font-medium transition-colors ${activeSection === item.name.toLowerCase() ? 'text-primary' : 'text-white/80'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
