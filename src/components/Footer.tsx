import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060a14] py-12 relative text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding & Status */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-white tracking-wider">
                TUSHAR<span className="text-sky-400">.DEV</span>
              </span>
            </div>

            <span className="hidden sm:inline text-slate-700">|</span>

            <div className="flex items-center space-x-2 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CI/CD Automated Deployment Active</span>
            </div>
          </div>

          {/* Center: Copyright */}
          <div className="text-center text-slate-500 text-[11px]">
            &copy; {new Date().getFullYear()} Tushar. All rights reserved. Deployed with Vite on GitHub Pages.
          </div>

          {/* Right: Back to top & Social */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <TechIcon name="github" className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors flex items-center space-x-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

