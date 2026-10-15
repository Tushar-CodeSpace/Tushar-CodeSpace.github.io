import React, { useState } from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const TechStack: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; level?: string } | null>(null);

  return (
    <div id="skills" className="flex flex-col h-full rounded-2xl bg-[#0b1224]/85 border border-slate-800/80 p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <Wrench className="w-4 h-4 text-sky-400" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            Tech Stack
          </h3>
        </div>

        <div className="flex items-center space-x-2">
          {hoveredSkill && (
            <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-500/30 px-2 py-0.5 rounded">
              {hoveredSkill.name} ({hoveredSkill.level})
            </span>
          )}
          <a
            href="#projects"
            className="inline-flex items-center space-x-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
          >
            <span>View all skills</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Categorized Rows */}
      <div className="space-y-4">
        {TECH_STACK.map((group) => (
          <div key={group.category} className="flex items-center justify-between py-1 group">
            {/* Category label */}
            <span className="text-xs font-medium text-slate-400 w-24 shrink-0 group-hover:text-slate-200 transition-colors">
              {group.category}
            </span>

            {/* Icons row */}
            <div className="flex items-center space-x-3.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative p-1.5 rounded-lg bg-slate-900/80 border border-slate-800/80 hover:border-sky-400/50 hover:bg-slate-800 transition-all cursor-pointer group/icon"
                >
                  <TechIcon name={skill.icon} className="w-5 h-5 transition-transform group-hover/icon:scale-110" />

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded bg-slate-950 border border-sky-500/30 text-[10px] font-mono text-sky-300 whitespace-nowrap shadow-md opacity-0 group-hover/icon:opacity-100 pointer-events-none transition-opacity z-20">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-auto pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Production verified</span>
        <span className="text-emerald-400">● 100% Linux Native</span>
      </div>

    </div>
  );
};

