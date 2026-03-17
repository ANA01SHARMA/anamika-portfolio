import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu } from 'lucide-react';

const Certificates = () => {
  const certs = [
    { 
      title: "Certified Essentials Automation Professional", 
      issuer: "Automation Anywhere", 
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", 
      icon: <Award className="text-secondary" />,
      link: "/Automation Anywhere RPA.pdf",
      gradient: "from-blue-500 via-blue-400 to-indigo-500"
    },
    { 
      title: "Cloud Computing", 
      issuer: "NPTEL", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", 
      icon: <ShieldCheck className="text-primary" />,
      link: "/Cloud Computing NPTEL.pdf",
      gradient: "from-purple-500 via-pink-500 to-secondary"
    },
    { 
      title: "Data Structures and Algorithms", 
      issuer: "NeoColab", 
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800", 
      icon: <Cpu className="text-accent" />,
      link: "/Data Structures and Algorithm_NeoColab.pdf",
      gradient: "from-pink-500 via-rose-500 to-accent"
    },
    { 
      title: "Java Programming", 
      issuer: "IamNeo", 
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", 
      icon: <Cpu className="text-primary" />,
      link: "/Java IamNeo.pdf",
      gradient: "from-sky-500 via-blue-500 to-indigo-600"
    }
  ];

  return (
    <section id="certificates" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2">
          Certifications
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, index) => (
          <div key={index} className="group relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 flex flex-col">
            {/* Gradient Border Glow */}
            <div className={`absolute inset-0 bg-gradient-to-b ${cert.gradient} opacity-20 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 rounded-2xl`} />
            
            <div className="relative bg-[#0b0f19] rounded-2xl overflow-hidden h-full flex flex-col border border-white/5">
              <div className="h-40 overflow-hidden relative">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-300" />
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">{cert.icon}</div>
                  <div>
                    <h3 className="font-bold text-base leading-tight mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={`${cert.link}#toolbar=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-white/5 hover:bg-primary text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 border border-white/10 hover:border-primary shadow-lg"
                  >
                    <Award size={14} /> View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Certificates;
