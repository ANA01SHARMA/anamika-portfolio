import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <BookOpen className="text-primary" size={24} />,
      title: "Education",
      desc: "B.Tech CSE Student",
      color: "bg-primary/10",
      gradient: "from-primary to-blue-600"
    },
    {
      icon: <Target className="text-secondary" size={24} />,
      title: "Focus",
      desc: "Data Science & AI",
      color: "bg-secondary/10",
      gradient: "from-secondary to-purple-600"
    },
    {
      icon: <Heart className="text-accent" size={24} />,
      title: "Goal",
      desc: "Strengthening DSA & problem-solving",
      color: "bg-accent/10",
      gradient: "from-accent to-pink-600"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            About Me
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Gradient border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-40 blur-md transition-all duration-500 rounded-2xl" />
            
            <div className="relative bg-white/[0.03] backdrop-blur-xl p-6 rounded-2xl border border-white/5 border-l-4 border-l-primary h-full">
              <p className="text-white/80 text-lg leading-relaxed mb-2">
                A <span className="text-primary font-bold">B.Tech Computer Science & Engineering</span> student with a deep-rooted passion for <span className="text-secondary font-bold">Data Science</span> and <span className="text-secondary font-bold">Software Development</span>. Focused on turning complex data into <span className="text-accent font-bold">meaningful, actionable insights</span> that drive real-world decisions.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                My journey is marked by a <span className="text-accent font-bold italic underline decoration-accent/30 decoration-2 underline-offset-4">hands-on approach</span>. I leverage tools like <span className="bg-white/5 px-2 py-1 rounded text-primary">Power BI</span>, <span className="bg-white/5 px-2 py-1 rounded text-secondary">Excel</span>, and <span className="bg-white/5 px-2 py-1 rounded text-accent">Machine Learning</span> to architect data-driven systems that empower decision-makers.
              </p>

              {/* Bottom focus card integrated inside for same layout */}
              <div className="group/focus relative p-[1px] rounded-2xl transition-all duration-300">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover/focus:opacity-30 blur-sm transition-all duration-500 rounded-2xl" />
                 <div className="relative flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-transform group-hover/focus:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="text-primary" size={24} />
                  </div>
                  <p className="text-white/60 text-sm">Currently focused on mastering <span className="text-white font-medium">Data Science such as Big Data</span>.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats/Cards Column */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group relative p-[1px] rounded-2xl transition-all duration-300"
              >
                {/* Gradient border glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-40 blur-sm transition-all duration-500 rounded-2xl`} />
                
                <div className="relative bg-white/[0.03] backdrop-blur-xl p-6 flex items-center gap-6 group rounded-2xl h-full border border-white/5">
                  <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{stat.title}</h3>
                    <p className="text-white/50">{stat.desc}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="text-primary/50" size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
