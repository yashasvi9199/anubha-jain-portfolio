import { ReactElement } from 'react';
import whyMeData from '../data/whyme.json';
import { Icon } from '../utils/IconMapper';
import { motion } from 'framer-motion';
import { WhyMeData } from '../types';
import { getAssetUrl } from '../utils/assetUtils';
// import profile from '../assets/pic2.webp';


export function WhyMe(): ReactElement {
  const data: WhyMeData = whyMeData as WhyMeData;
  return (
    <section id="why-me" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-[0.03] select-none pointer-events-none">
            <motion.span 
              initial={{ x: "100%" }}
              whileInView={{ x: "-20%" }}
              transition={{ duration: 10, ease: "linear" }}
              className="text-[20vw] font-bold font-serif whitespace-nowrap block"
            >
              AUTHENTIC
            </motion.span>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
                <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/5">
                    <img 
                    src={getAssetUrl(whyMeData.image)} 
                        alt="Content Creation Process" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {/* TODO: Add years of experience */}
                {/* <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 w-48 h-48 bg-surfaceHighlight border border-white/5 p-6 rounded-lg hidden md:flex flex-col justify-center"
                >
                    <span className="text-4xl font-serif text-accent mb-2"></span> 
                    <span className="text-sm text-secondary">Years of Content Creation Experience</span>
                </motion.div> */}
            </motion.div>

            {/* Text Side */}
            <div className="order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Why Brands Choose Me</h2>
                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-8">
                      Content that converts,<br/> 
                      <span className="italic text-secondary">not just views.</span>
                  </h3>
                </motion.div>

                <div className="space-y-8">
                    {data.benefits.map((benefit, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex space-x-4"
                        >
                            <div className="flex-shrink-0 mt-1 text-accent">
                                <Icon name={benefit.iconName} size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white mb-1">{benefit.title}</h4>
                                <p className="text-secondary text-sm">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}