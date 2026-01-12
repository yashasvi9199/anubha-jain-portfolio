import { useState, useRef, ReactElement } from 'react';
import { Play, X } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import { PortfolioItem } from '../types';


interface ProjectCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

// Component for individual parallax card
function ProjectCard({ item, onClick }: ProjectCardProps): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect: Image moves vertically opposite to scroll
  const y: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div 
      ref={ref}
      layoutId={`card-${item.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-neutral-900 mb-6"
    >
      <div className="aspect-[9/16] relative overflow-hidden">
        <motion.img 
          style={{ y, scale }}
          src={item.thumbnail} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{item.category}</span>
            <h4 className="text-xl text-white font-medium mb-2">{item.title}</h4>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Play Icon for Videos */}
        {item.type === 'video' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform z-10">
            <Play className="fill-white text-white ml-1" size={24} />
          </div>
        )}
      </div>
    </motion.div>
  );
}


export function Portfolio(): ReactElement {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Cast JSON data to typed array
  const portfolio: PortfolioItem[] = portfolioData as PortfolioItem[];

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(portfolio.map(item => item.category)))];

  const filteredItems = activeCategory === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  const openModal = (item: PortfolioItem): void => {
    setSelectedItem(item);
  };

  const closeModal = (): void => {
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white">Featured Projects</h3>
          </motion.div>
          
          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-accent text-black font-medium' 
                    : 'bg-white/5 text-secondary hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredItems.map((item) => (
             <ProjectCard key={item.id} item={item} onClick={() => openModal(item)} />
          ))}
        </div>
      </div>

      {/* Media Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={closeModal}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-[70] p-2 bg-black/50 rounded-full"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          
          <motion.div 
            layoutId={`card-${selectedItem.id}`}
            className="w-full max-w-sm md:max-w-md bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              <video 
                src={selectedItem.mediaUrl} 
                controls 
                autoPlay 
                className="w-full h-auto max-h-[80vh]"
                poster={selectedItem.thumbnail}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={selectedItem.mediaUrl || selectedItem.thumbnail} 
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain" 
              />
            )}
            <div className="p-4 bg-surface">
              <h3 className="text-lg font-medium text-white">{selectedItem.title}</h3>
              <p className="text-sm text-secondary">{selectedItem.category}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}