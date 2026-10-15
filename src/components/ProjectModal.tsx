import React from 'react';
import { X, CheckCircle2, Server, Layers } from 'lucide-react';
import { Project } from '../types';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b1224] border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-950/60 border border-sky-500/30 text-sky-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>{project.category}</span>
          </span>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-sky-400 mt-1 font-mono">
            {project.description}
          </p>
        </div>

        {/* Image Preview */}
        <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224] via-transparent to-transparent opacity-80" />
        </div>

        {/* Full Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>Project Overview</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Metrics Grid if available */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-lg sm:text-xl font-bold text-sky-400 font-mono">
                  {m.value}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Architecture Flow */}
        {project.architecture && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <Server className="w-3.5 h-3.5 text-sky-400" />
              <span>Deployment & Architectural Pipeline</span>
            </h4>
            <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono">
              {project.architecture.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-2.5 py-1 rounded-md bg-[#0b1224] border border-slate-700 text-slate-200">
                    {step}
                  </span>
                  {idx < (project.architecture?.length ?? 0) - 1 && (
                    <span className="text-sky-400 font-bold">&rarr;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Key Capabilities & Infrastructure</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <div 
                key={tag}
                className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200"
              >
                <TechIcon name={tag} className="w-3.5 h-3.5" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-colors"
            >
              <TechIcon name="github" className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          ) : <div />}

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

