import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'experience', 'skills', 'lab', 'about', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Lab', href: '#lab' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#contact') {
      onOpenContact();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#080d1a]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="group flex items-center space-x-2 text-xl font-bold tracking-tight text-white transition-colors"
          >
            <span className="flex items-center tracking-wider font-extrabold text-white group-hover:text-sky-400 transition-colors">
              TUSHAR
              <span className="text-sky-400">.DEV</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping group-hover:bg-blue-400" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`transition-colors relative py-1 text-xs uppercase tracking-wider ${
                    isActive 
                      ? 'text-sky-400 font-semibold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Status indicator & Download Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            <button
              onClick={onOpenResume}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(14,165,233,0.35)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs"
              title="Resume"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a101f]/95 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 backdrop-blur-xl">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{PERSONAL_INFO.status}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-sky-500 text-slate-950 font-semibold text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs"
            >
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

