import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    // Using the Formspree endpoint provided: https://formspree.io/f/myknnbyl
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/myknnbyl";

    try {
      // Use FormData for better deliverability and spam filter compatibility
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      data.append('_subject', "New message from Anamika Sharma Portfolio");
      
      // Honeypot field: Only append if it was somehow filled (to catch bots)
      const gotcha = document.getElementsByName('_gotcha')[0]?.value;
      if (gotcha) {
        data.append('_gotcha', gotcha);
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✅ Message sent! Please check your Inbox (and Spam folder just in case).' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({ 
        type: 'error', 
        message: '❌ Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSending(false);
      // Clear status after 8 seconds to give more time to read
      setTimeout(() => setStatus({ type: '', message: '' }), 8000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#030712] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2">
            Get In Touch
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Professional Connections</h3>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                I'm currently open to new career opportunities and professional collaborations. 
                Whether you're interested in a potential project or just want to connect, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: <Mail size={20} />, label: "Email", value: "anamikasharma012005@gmail.com", href: "mailto:anamikasharma012005@gmail.com", gradient: "from-blue-500 to-indigo-500", color: "blue" },
                { icon: <Phone size={20} />, label: "Phone", value: "+91-8092684570", href: "tel:+918092684570", gradient: "from-pink-500 to-rose-500", color: "pink" },
                { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/anamika01sharma", href: "https://www.linkedin.com/in/anamika01sharma/", gradient: "from-purple-500 to-indigo-600", color: "purple" },
                { icon: <Github size={20} />, label: "GitHub", value: "github.com/ANA01SHARMA", href: "https://github.com/ANA01SHARMA", gradient: "from-emerald-500 to-teal-600", color: "emerald" }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="group relative p-[1px] rounded-2xl transition-all duration-300 block hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 rounded-2xl`} />
                  <div className="relative bg-[#0b0f19] flex items-center gap-4 p-4 rounded-2xl border border-white/5 h-full">
                    <div className={`p-3 rounded-xl bg-white/5 text-white/70 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:${item.gradient} group-hover:text-white transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 rounded-2xl" />
            
            <div className="relative bg-[#0b0f19] p-6 rounded-2xl border border-white/5 h-full">
              <form 
                action="https://formspree.io/f/myknnbyl" 
                method="POST" 
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                {/* Hidden field for Formspree subject */}
                <input type="hidden" name="_subject" value="New message from Anamika Sharma Portfolio" />
                {/* Honeypot field to prevent spam */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                <div>
                  <label className="block text-sm font-bold text-white/60 mb-2 uppercase tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-white" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/60 mb-2 uppercase tracking-wide">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-white" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/60 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="How can I help you?" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-white"
                  ></textarea>
                </div>

                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`flex items-center gap-2 p-4 rounded-xl text-sm font-medium ${
                        status.type === 'success' 
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                          : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                      }`}
                    >
                      {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-4 bg-primary text-white flex items-center justify-center gap-2 font-bold tracking-widest uppercase shadow-lg shadow-primary/20 rounded-xl transition-all ${
                    isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/80 hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  {isSending ? (
                    <>
                      Sending... <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
