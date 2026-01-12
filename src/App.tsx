import { useState, useEffect, ReactElement } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { WhyMe } from './sections/WhyMe';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ArrowUp } from 'lucide-react';

function App(): ReactElement {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-background font-sans">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <WhyMe />
        <Contact />
      </main>

      <Footer />

      {/* Sticky Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-surfaceHighlight border border-white/10 text-accent hover:bg-white/10 transition-all duration-300 z-50 shadow-lg backdrop-blur-sm ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;