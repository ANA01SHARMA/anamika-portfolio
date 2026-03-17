import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, BarChart, Cpu, Terminal, Layers } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="text-primary" size={24} />,
      skills: [
        { name: "Java", emoji: "☕" },
        { name: "Python", emoji: "🐍" },
        { name: "C", emoji: "💻" },
        { name: "C++", emoji: "⚙️" }
      ],
      gradient: "from-blue-500 via-blue-400 to-indigo-500"
    },
    {
      title: "Data Science / ML",
      icon: <Cpu className="text-secondary" size={24} />,
      skills: [
        { name: "Scikit-learn", emoji: "🧪" },
        { name: "Machine Learning", emoji: "🤖" },
        { name: "Data Analysis", emoji: "📊" },
        { name: "Statistics", emoji: "📈" }
      ],
      gradient: "from-purple-500 via-pink-500 to-secondary"
    },
    {
      title: "Frameworks / Libraries",
      icon: <Layers className="text-accent" size={24} />,
      skills: [
        { name: "NumPy", emoji: "📦" },
        { name: "Pandas", emoji: "🐼" },
        { name: "Matplotlib", emoji: "📉" },
        { name: "Scikit-learn", emoji: "🧬" }
      ],
      gradient: "from-pink-500 via-rose-500 to-accent"
    },
    {
      title: "Tools / Platforms",
      icon: <Wrench className="text-primary" size={24} />,
      skills: [
        { name: "Power BI", emoji: "📊" },
        { name: "Excel", emoji: "📈" },
        { name: "MySQL", emoji: "🗄️" },
        { name: "Git", emoji: "🐙" },
        { name: "GitHub", emoji: "🤝" }
      ],
      gradient: "from-sky-500 via-blue-500 to-indigo-600"
    },
    {
      title: "Web Development",
      icon: <Globe className="text-secondary" size={24} />,
      skills: [
        { name: "HTML", emoji: "🌐" },
        { name: "CSS", emoji: "🎨" }
      ],
      gradient: "from-emerald-400 via-teal-500 to-cyan-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2">Technical Skills</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Gradient Border Glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${category.gradient} opacity-20 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 rounded-2xl`} />
              
              <div className="relative bg-[#0b0f19] rounded-2xl p-6 h-full border border-white/5 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3 flex-grow">
                  {category.skills.map((skill, sIndex) => (
                    <motion.li 
                      key={sIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-default py-1"
                    >
                      <span className="text-xl group-hover:animate-pulse">{skill.emoji}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom decorative line */}
                <div className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${category.gradient} transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
