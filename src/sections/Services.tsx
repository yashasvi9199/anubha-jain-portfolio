import { ReactElement } from 'react';
import servicesData from '../data/services.json';
import { Icon } from '../utils/IconMapper';
import { motion, Variants } from 'framer-motion';
import { ServiceItem } from '../types';


const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};


export function Services(): ReactElement {
  const services: ServiceItem[] = servicesData as ServiceItem[];
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-accent uppercase tracking-widest mb-3"
          >
            What I Create
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-white"
          >
            Content Styles
          </motion.h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              variants={item}
              key={index}
              className={`p-6 rounded-lg border border-white/5 bg-surface hover:bg-surfaceHighlight transition-colors duration-300 group ${
                index === 0 || index === 5 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="mb-4 p-3 bg-white/5 rounded-full w-fit group-hover:bg-accent group-hover:text-black transition-colors text-accent">
                <Icon name={service.iconName} size={24} />
              </div>
              <h4 className="text-xl font-medium text-white mb-2">{service.title}</h4>
              <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}