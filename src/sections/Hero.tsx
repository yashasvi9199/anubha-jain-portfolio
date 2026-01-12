import { useRef, ReactElement } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import profileData from '../data/profile.json';

 
export function Hero(): ReactElement {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const bg1Y: MotionValue<number> = useTransform(scrollY, [0, 1000], [0, 300]);
  const bg2Y: MotionValue<number> = useTransform(scrollY, [0, 1000], [0, -200]);
  const imageY: MotionValue<number> = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements with Parallax */}
      <motion.div 
        style={{ y: bg1Y }}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: bg2Y }}
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-surfaceHighlight border border-white/5 rounded-full px-4 py-1.5"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs uppercase tracking-widest text-secondary">{profileData.role}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-medium leading-tight text-white"
          >
            <span className="block mb-2">Transforming</span>
            <span className="italic text-secondary">Brand Stories</span> into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Revenue.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-secondary max-w-md leading-relaxed"
          >
            {profileData.subheadline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white text-black rounded-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>View Portfolio</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white rounded-sm font-medium hover:bg-white/5 transition-colors text-center"
            >
              Work With Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center space-x-8 pt-8 border-t border-white/5"
          >
             {/* {profileData.stats.map((stat, index) => (
               <div key={index} className="text-center">
                 <p className="text-2xl font-serif text-accent">{stat.value}</p>
                 <p className="text-xs text-secondary uppercase tracking-wider">{stat.label}</p>
               </div>
             ))} */}
          </motion.div>
        </div>

        {/* Right Content - Profile Image with Parallax */}
        <motion.div 
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[600px] hidden md:block"
        >
          <div className="absolute inset-0 bg-surface rounded-t-[10rem] rounded-b-lg border border-white/5 overflow-hidden group">
            <img 
              src={profileData.image} 
              alt={`${profileData.name} - Creator`} 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            
            {/* Floating Cards */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-12 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
            >
               <p className="text-sm font-medium text-white mb-2">"Ad-ready content optimized for Instagram & Amazon"</p>
               <div className="flex items-center space-x-3">
                 <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold text-xs">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                 </div>
                 <div>
                   <p className="text-xs text-white">{profileData.name}</p>
                   <p className="text-[10px] text-secondary">UGC Specialist</p>
                 </div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}