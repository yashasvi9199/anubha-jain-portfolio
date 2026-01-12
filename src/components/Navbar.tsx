import { useState, useEffect, ReactElement } from 'react';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import profileData from '../data/profile.json';

export function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-serif italic font-semibold text-white tracking-wide">
          {profileData.name}<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-secondary hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`mailto:${profileData.socials.email}`}
            className="px-5 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-serif text-white hover:text-accent italic"
          >
            {link.name}
          </a>
        ))}
        <div className="flex space-x-6 mt-8">
          <a href={profileData.socials.instagram} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent">
            <Instagram size={32} />
          </a>
          <a href={`mailto:${profileData.socials.email}`} className="text-secondary hover:text-accent">
            <Mail size={32} />
          </a>
        </div>
      </div>
    </nav>
  );
}