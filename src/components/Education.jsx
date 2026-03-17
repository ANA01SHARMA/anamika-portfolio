import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    { 
      school: "Lovely Professional University", 
      location: "Punjab, India", 
      degree: "Bachelor of Technology – Computer Science and Engineering", 
      score: "CGPA: 7.31", 
      period: "2023 – Present",
      gradient: "from-blue-500 via-blue-400 to-indigo-500"
    },
    { 
      school: "Kendriya Vidyalaya Maithon Dam", 
      location: "Jharkhand", 
      degree: "Intermediate", 
      score: "Percentage: 76.6%", 
      period: "2021 - 2023",
      gradient: "from-purple-500 via-pink-500 to-secondary"
    },
    { 
      school: "Kendriya Vidyalaya Maithon Dam", 
      location: "Jharkhand", 
      degree: "Matriculation", 
      score: "Percentage: 91%", 
      period: "2021",
      gradient: "from-pink-500 via-rose-500 to-accent"
    }
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2">
          Education History
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto pl-8 border-l-2 border-white/10 space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-[41px] top-0 p-2 bg-[#0b0f19] border-2 border-primary/40 rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-300 z-10">
              <GraduationCap size={18} className="text-primary group-hover:text-white transition-colors" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Gradient Border Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-10 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 rounded-2xl`} />
              
              <div className="relative bg-[#0b0f19] rounded-2xl p-6 border border-white/5 h-full overflow-hidden">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{edu.school}</h3>
                    <p className="text-secondary font-medium mt-1">{edu.degree}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-white/60 text-sm mb-4">
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-secondary" /> {edu.location}</span>
                  <span className="flex items-center gap-1.5"><Award size={14} className="text-accent" /> {edu.score}</span>
                </div>

                {/* Bottom decorative line */}
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${edu.gradient} transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
