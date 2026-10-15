import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = ['All', 'DevOps Platform', 'Industrial Automation', 'Monitoring System', 'Self Project'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return showAll ? true : p.featured;
    return p.category === filter;
  });

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'DevOps Platform':
        return 'bg-blue-950/60 text-blue-400 border-blue-500/30';
      case 'Industrial Automation':
        return 'bg-amber-950/60 text-amber-400 border-amber-500/30';
      case 'Monitoring System':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30';
      case 'Self Project':
        return 'bg-purple-950/60 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getCategoryDotClass = (category: string) => {
    switch (category) {
      case 'DevOps Platform':
        return 'bg-blue-400';
      case 'Industrial Automation':
        return 'bg-amber-400';
      case 'Monitoring System':
        return 'bg-emerald-400';
      case 'Self Project':
        return 'bg-purple-400';
      default:
        return 'bg-sky-400';
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1 flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Deployments & Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group cursor-pointer"
            >
              <span>{showAll ? 'Show featured only' : 'View all projects'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-[#0c1326] text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col justify-between rounded-xl bg-[#0b1224]/85 border border-slate-800/80 hover:border-sky-500/40 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 cursor-pointer relative overflow-hidden"
            >
              {/* Card Top: Tag + Thumbnail */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${getCategoryBadgeClass(project.category)}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${getCategoryDotClass(project.category)} animate-pulse`} />
                    <span>{project.category}</span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 group-hover:text-sky-400 group-hover:bg-slate-800/80 transition-all"
                    title="View details"
                  >
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Project Image Preview */}
                <div className="w-full h-32 rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224] via-transparent to-transparent opacity-80" />
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom: Tech Stack Icons & Link */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {project.tags.slice(0, 5).map((tech) => (
                    <div
                      key={tech}
                      className="p-1 rounded bg-slate-900/90 border border-slate-800"
                      title={tech}
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                    </div>
                  ))}
                </div>

                <span className="text-[11px] font-mono text-slate-500 group-hover:text-sky-400 transition-colors">
                  Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

