import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  GitBranch, 
  Cloud, 
  Box, 
  Activity, 
  Cpu, 
  CheckCircle2,
  Server
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const heroCompetencies = [
    {
      title: "CI/CD Automation",
      subtitle: "Jenkins, GitHub Actions, Azure DevOps",
      icon: GitBranch,
      color: "text-sky-400 bg-sky-950/60 border-sky-500/30",
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "AWS, Azure, Linux Servers",
      icon: Cloud,
      color: "text-blue-400 bg-blue-950/60 border-blue-500/30",
    },
    {
      title: "Containerization",
      subtitle: "Docker, Kubernetes, Dokploy",
      icon: Box,
      color: "text-cyan-400 bg-cyan-950/60 border-cyan-500/30",
    },
    {
      title: "Monitoring & Observability",
      subtitle: "Prometheus, Grafana, ELK, Custom Agents",
      icon: Activity,
      color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
    },
    {
      title: "Industrial Automation",
      subtitle: "WMS, WCS, SCADA, PLC Integration",
      icon: Cpu,
      color: "text-amber-400 bg-amber-950/60 border-amber-500/30",
    },
  ];

  const architectureHotspots = [
    { id: 'github', label: 'GitHub', pos: 'top-[16%] left-[10%]' },
    { id: 'cicd', label: 'CI/CD Pipeline', pos: 'top-[38%] left-[22%]' },
    { id: 'cloud', label: 'AWS & Azure Cloud', pos: 'top-[12%] left-[45%]' },
    { id: 'k8s', label: 'Kubernetes Cluster', pos: 'top-[18%] right-[10%]' },
    { id: 'monitoring', label: 'Monitoring Engine', pos: 'top-[42%] right-[5%]' },
    { id: 'servers', label: 'On-Premise Servers', pos: 'bottom-[22%] left-[22%]' },
    { id: 'machines', label: 'Industrial Machines', pos: 'bottom-[14%] left-[50%]' },
    { id: 'edge', label: 'Edge Devices', pos: 'bottom-[20%] right-[10%]' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left side Title/Bio, Right side Isometric Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Terminal prompt introductory badge */}
            <div className="inline-flex items-center space-x-2 text-emerald-400 font-mono text-sm tracking-wide bg-emerald-950/30 border border-emerald-500/20 px-3 py-1 rounded-md">
              <span className="text-emerald-500 font-bold">&gt;</span>
              <span>Hello, I'm</span>
              <span className="inline-block w-1.5 h-4 bg-emerald-400 animate-pulse" />
            </div>

            {/* Main Name & Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Tushar
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
                DevOps Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-semibold text-sm transition-all shadow-[0_0_20px_rgba(14,165,233,0.35)] hover:shadow-[0_0_28px_rgba(14,165,233,0.55)] cursor-pointer group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 text-sm font-medium transition-all cursor-pointer hover:shadow-lg"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column (Span 6): Competencies + 3D Architecture Diagram */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Top 5 Core Competency Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {heroCompetencies.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.title}
                    className={`flex items-start space-x-3 p-2.5 rounded-lg border transition-all duration-200 ${
                      idx === 4 ? 'sm:col-span-2' : ''
                    } bg-[#0b1224]/80 border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/90 group`}
                  >
                    <div className={`p-2 rounded-md ${item.color} group-hover:scale-105 transition-transform shrink-0`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-semibold text-white tracking-wide group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3D Isometric DevOps Architecture Graphic Container */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800/80 bg-[#090f20]/90 shadow-2xl group">
              <div className="absolute top-2 left-3 z-20 flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">architecture-topology.svg</span>
              </div>

              {/* Architecture image */}
              <div className="relative pt-6">
                <img
                  src="./assets/devops-architecture.jpg"
                  alt="DevOps and Industrial Automation Infrastructure Architecture"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    // Fallback if image path needs fallback
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Hotspot triggers overlay */}
                {architectureHotspots.map((node) => (
                  <div
                    key={node.id}
                    className={`absolute ${node.pos} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20`}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className="relative group/pin">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 border border-white"></span>
                      </span>

                      {/* Tooltip on hover */}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-2 py-1 rounded bg-slate-900 border border-sky-500/40 text-[10px] font-mono text-sky-300 whitespace-nowrap shadow-lg pointer-events-none transition-all ${
                        activeNode === node.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>
                        {node.label}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Bottom status badge */}
                <div className="absolute bottom-2 right-3 z-10 flex items-center space-x-2 px-2.5 py-1 rounded bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-400 backdrop-blur-sm">
                  <Server className="w-3 h-3 text-sky-400" />
                  <span>Hybrid Cloud & Industrial Mesh</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Five Stat Cards Grid Matching Mockup */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-[#0b1224]/80 border border-slate-800/90 hover:border-sky-500/30 hover:bg-[#0f172e] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                    {stat.value}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-sky-500/40 group-hover:text-sky-400 transition-colors" />
                </div>
                <div className="text-xs font-medium text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
