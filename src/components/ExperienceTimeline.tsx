import React, { useState } from 'react';
import { ArrowRight, Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="experience" className="flex flex-col h-full rounded-2xl bg-[#0b1224]/85 border border-slate-800/80 p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-sky-400" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            Experience
          </h3>
        </div>

        <a
          href="#about"
          className="inline-flex items-center space-x-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
        >
          <span>View full timeline</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Timeline items */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-blue-600 before:to-slate-800">
        {EXPERIENCES.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Node dot */}
              <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#0b1224] border-2 border-sky-400 group-hover:border-sky-300 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(56,189,248,0.6)]" />

              {/* Item Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] font-mono text-sky-400 font-semibold mb-0.5">
                    {exp.period}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h4>
                  <div className="text-xs text-slate-400 font-medium">
                    {exp.company}
                  </div>
                </div>

                {/* Company Logo Badge */}
                <div className="shrink-0 mt-0.5">
                  <TechIcon name={exp.companyLogoType} className="w-auto h-auto" />
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-2.5 space-y-1.5 text-xs text-slate-300">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold leading-tight">•</span>
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Expandable Extra Details */}
              {isExpanded && exp.expandedDetails && (
                <div className="mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2 text-xs text-slate-300 animate-fadeIn">
                  <div className="font-semibold text-sky-400 text-[11px] uppercase tracking-wider">
                    Key Accomplishments:
                  </div>
                  <ul className="space-y-1 pl-1">
                    {exp.expandedDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-emerald-400">▹</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Details toggle button */}
              <button
                onClick={() => toggleExpand(exp.id)}
                className="mt-2 inline-flex items-center space-x-1 text-[11px] text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
              >
                <span>{isExpanded ? 'Less details' : 'More details'}</span>
                {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
};

