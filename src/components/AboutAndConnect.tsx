import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Globe, 
  Mail, 
  Copy, 
  Check, 
  ArrowRight, 
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface AboutAndConnectProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const AboutAndConnect: React.FC<AboutAndConnectProps> = ({ onOpenContact, onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="about" className="flex flex-col space-y-6">
      
      {/* About Me Card */}
      <div className="rounded-2xl bg-[#0b1224]/85 border border-slate-800/80 p-6 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-sky-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                About Me
              </h3>
            </div>
          </div>

          {/* Terminal whoami subheader */}
          <div className="font-mono text-xs text-emerald-400 mb-3 flex items-center space-x-1.5">
            <span>&gt; whoami</span>
            <span className="w-1.5 h-3 bg-emerald-400 animate-pulse" />
          </div>

          {/* Bio + Avatar Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <p className="text-xs text-slate-300 leading-relaxed flex-1">
              {PERSONAL_INFO.bio}
            </p>

            {/* Profile Avatar */}
            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-md">
              <img
                src="./assets/tushar-profile.jpg"
                alt="Tushar - DevOps Engineer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Status Badges */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px]">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <MapPin className="w-3 h-3 text-sky-400" />
            <span>Based in {PERSONAL_INFO.location}</span>
          </span>

          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to opportunities</span>
          </span>

          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-sky-950/40 border border-sky-500/30 text-sky-300">
            <Globe className="w-3 h-3 text-sky-400" />
            <span>Available for remote / hybrid</span>
          </span>
        </div>
      </div>

      {/* Let's Connect Card */}
      <div id="contact" className="rounded-2xl bg-[#0b1224]/85 border border-slate-800/80 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight mb-4">
            Let's Connect
          </h3>

          {/* Email row with quick copy */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/90 border border-slate-800 mb-4 group">
            <div className="flex items-center space-x-2.5 overflow-hidden">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-xs font-mono text-slate-200 truncate select-all">
                {PERSONAL_INFO.email}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
              title="Copy email to clipboard"
            >
              {copied ? (
                <span className="flex items-center text-[10px] text-emerald-400 space-x-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Action Button & Socials */}
        <div className="space-y-4 pt-1">
          <button
            onClick={onOpenContact}
            className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] cursor-pointer group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center space-x-4 pt-2 border-t border-slate-800/80">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 hover:bg-slate-800 transition-all"
              title="GitHub Profile"
            >
              <TechIcon name="github" className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all"
              title="LinkedIn Profile"
            >
              <TechIcon name="linkedin" className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all"
              title="Twitter / X"
            >
              <TechIcon name="twitter" className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all cursor-pointer"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
