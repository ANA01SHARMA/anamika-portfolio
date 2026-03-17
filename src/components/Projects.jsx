import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Layout, Database, Smartphone } from 'lucide-react';

// Import project images
import chronicDiseaseImg from '../assets/chronic_disease.png';
import airPollutionImg from '../assets/air_pollution.png';
import chatServerImg from '../assets/chat_server.png';
import forcescopeImg from '../assets/forcescope.png';

const Projects = () => {
  const projects = [
    { 
      title: "U.S. Chronic Disease Trends", 
      desc: "Comprehensive analysis of long-term trends and health determinants of chronic diseases in the U.S. using Power BI for impactful insights.", 
      image: chronicDiseaseImg, 
      tech: ["Power BI", "Data Analytics", "Public Health"], 
      live: "https://www.linkedin.com/posts/anamika01sharma_powerbi-dataanalytics-healthcareanalytics-activity-7407114932984516610-Gk5L", 
      github: "https://github.com/ANA01SHARMA/U.S.-CHRONIC-DISEASE-TRENDS-AND-HEALTH-DETERMINANTS-2015-2022",
      gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    { 
      title: "Air Pollution Trend Analysis", 
      desc: "Machine learning based prediction and pattern analysis of air quality trends to understand atmospheric changes over time.", 
      image: airPollutionImg, 
      tech: ["Machine Learning", "Python", "Data Science"], 
      live: "https://www.linkedin.com/posts/anamika01sharma_machinelearning-datascience-predictiveanalytics-activity-7408180584033849344-1GuG", 
      github: "https://github.com/ANA01SHARMA/AIR-POLLUTION-TREND-ANALYSIS-AND-PATTERN",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    { 
      title: "Chat Server using Java", 
      desc: "High-performance multi-client chat server implemented using Java socket programming and multi-threading for real-time messaging.", 
      image: chatServerImg, 
      tech: ["Java", "Socket Programming", "Multi-threading"], 
      live: "https://www.linkedin.com/posts/anamika01sharma_java-summertraining-chatserver-activity-7350524790958436352-g9C1", 
      github: "https://github.com/ANA01SHARMA/Chat-Server-using-Java",
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    },
    { 
      title: "ForceScope: Police Use of Force", 
      desc: "Power BI dashboard visualizing statistical trends and incident patterns in police use of force for data-driven societal analysis.", 
      image: forcescopeImg, 
      tech: ["Power BI", "Data Visualization", "Dashboard Design"], 
      live: "https://www.linkedin.com/posts/anamika01sharma_datavisualization-dashboarddesign-powerbi-activity-7316721777559183360-xHUP", 
      github: "https://github.com/ANA01SHARMA/ForceScope-Analyzing-Trends-in-Police-Use-of-Force",
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2 drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">Featured Projects</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Glowing Gradient Border */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 rounded-2xl`} />
            
            <div className="relative bg-[#0b0f19] rounded-2xl overflow-hidden h-full flex flex-col md:flex-row border border-white/5">
              {/* Project Image - Increased width */}
              <div className="h-48 md:h-auto md:w-56 lg:w-64 overflow-hidden relative flex-shrink-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b0f19]/60 md:to-transparent" />
              </div>

              {/* Project Content - Slightly more padding and larger text */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/10 rounded-md text-[9px] uppercase tracking-widest font-bold text-white/70 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold tracking-wide flex items-center gap-2"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white transition-all text-xs font-bold tracking-wide hover:shadow-lg flex items-center gap-2`}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
