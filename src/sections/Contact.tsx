import { ReactElement } from 'react';
import { Mail, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import profileData from '../data/profile.json';


export function Contact(): ReactElement {
  return (
    <section id="contact" className="py-24 bg-surface relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Let's Work Together</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Ready to elevate your <br/> brand's content?
          </h3>
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
            I am currently open to paid collaborations, UGC packages, and gifting opportunities. Let's create something amazing for your audience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.a 
            href={`mailto:${profileData.socials.email}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col items-center justify-center p-8 bg-background border border-white/5 rounded-xl hover:border-accent/50 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-black transition-colors">
                <Mail size={24} />
            </div>
            <span className="text-sm text-secondary uppercase tracking-wider mb-2">Email Me</span>
            <span className="text-lg font-medium text-white">{profileData.socials.email}</span>
          </motion.a>

          <motion.a 
            href={profileData.socials.instagram}
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col items-center justify-center p-8 bg-background border border-white/5 rounded-xl hover:border-accent/50 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-black transition-colors">
                <Instagram size={24} />
            </div>
            <span className="text-sm text-secondary uppercase tracking-wider mb-2">DM on Instagram</span>
            <span className="text-lg font-medium text-white">{profileData.socials.instagramHandle}</span>
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-surfaceHighlight to-background border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
            <div className="text-left">
                <h4 className="text-xl font-serif text-white mb-2">Looking for a custom package?</h4>
                <p className="text-secondary text-sm">Tell me about your campaign goals and I'll tailor a proposal for you.</p>
            </div>
            <a 
                href={`mailto:${profileData.socials.email}?subject=Custom Package Inquiry`} 
                className="px-6 py-3 bg-accent text-black font-medium rounded hover:bg-white transition-colors flex items-center"
            >
                Get a Quote <ArrowRight size={18} className="ml-2" />
            </a>
        </motion.div>
      </div>
    </section>
  );
}