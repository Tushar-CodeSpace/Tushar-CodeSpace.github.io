import React, { useState, useEffect } from 'react';
import { 
  Terminal, ShieldCheck, Cloud, Cpu, Server, Activity, ArrowRight, 
  Download, Mail, FileText, CheckCircle2, 
  ExternalLink, Layers, Code, CpuIcon, X, Send, Menu
} from 'lucide-react';

// Crisp vector SVG icons for brand socials not present in modern lucide-react
const Github = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
  </svg>
);

const Twitter = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function App() {
  const [activeModal, setActiveModal] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ text: string; type: string }>>([
    { text: 'snyder@control-plane:~$ systemctl status devops-core.service', type: 'cmd' },
    { text: '● devops-core.service - High Availability Infrastructure Orchestrator', type: 'output' },
    { text: '     Active: active (running) since Thu 2026-10-15 14:00:00 IST; 4y ago', type: 'output' },
    { text: '   Main PID: 1337 (python3 / uv)', type: 'output' },
    { text: '   Uptime: 99.9% | Target: AWS / Proxmox / Edge', type: 'success' }
  ]);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const projectsData = [
    {
      id: 'octyn',
      title: 'Octyn-DevOps-Services',
      category: 'DevOps Platform',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      description: 'CI/CD, Monitoring, Server Setup, Deployment Automation across distributed clusters.',
      tech: ['GitHub', 'Docker', 'Kubernetes', 'Prometheus', 'CLI'],
      details: 'Enterprise-grade automation platform orchestrating containerized workloads, automated rollbacks, and real-time infrastructure metrics.'
    },
    {
      id: 'nidoworkz',
      title: 'NIDOWORKZ Deployment',
      category: 'Industrial Automation',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      description: 'Industrial WMS/Sorter Systems, PLC Integration, Monitoring warehouse sorting workflows.',
      tech: ['Python', 'TCP Sockets', 'Linux', 'PLC', 'Docker'],
      details: 'Standalone socket daemons and hardware-integrated pipeline controllers designed for zero-latency barcode scanning and sorting execution.'
    },
    {
      id: 'central-agent',
      title: 'Central Monitoring Agent',
      category: 'Monitoring System',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'Python Agent, Alerts, System Metrics, Redis queue caching & Uptime Kuma integration.',
      tech: ['Python', 'Redis', 'Uptime Kuma', 'Bash', 'SQLite'],
      details: 'Lightweight multi-threaded observability agent collecting kernel stats, memory pressure, and dispatching instant webhook alerts.'
    },
    {
      id: 'glitch',
      title: 'GliTch - DevOps as a Service',
      category: 'Self Project',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'SaaS Platform for Automated Deployments, Monitoring and Server Management.',
      tech: ['Node.js', 'React', 'JavaScript', 'Docker', 'AWS'],
      details: 'Cloud dashboard enabling developers to provision isolated test environments and view real-time container health metrics with one click.'
    }
  ];

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const cmd = terminalInput.trim().toLowerCase();
    
    let response = '';
    if (cmd === 'help') {
      response = 'Available commands: about, skills, projects, experience, contact, clear, sudo hire';
    } else if (cmd === 'about') {
      response = 'Tushar Kanti Acharyya - Senior DevOps & Automation Engineer with 4+ years of experience.';
    } else if (cmd === 'skills') {
      response = 'AWS, Proxmox, Docker, Kubernetes, GitHub Actions, Python, Go, Linux, Redis, PostgreSQL.';
    } else if (cmd === 'projects') {
      response = 'Octyn, NIDOWORKZ, Central Monitoring Agent, GliTch SaaS.';
    } else if (cmd === 'contact') {
      response = 'Email: tushar.codespace@gmail.com | LinkedIn: /in/tushar-acharyya';
    } else if (cmd === 'sudo hire') {
      response = 'ACCESS GRANTED! Priority recruitment unlocked. Reach out via email or contact form.';
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      response = `zsh: command not found: ${cmd}. Type 'help' for commands.`;
    }

    setTerminalLogs(prev => [
      ...prev,
      { text: `snyder@control-plane:~$ ${terminalInput}`, type: 'cmd' },
      { text: response, type: 'output' }
    ]);
    setTerminalInput('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const mailtoUrl = `mailto:tushar.codespace@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${contactForm.name}`
    )}&body=${encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    )}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
      setActiveModal(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* Top Monitoring Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0e17]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="#home" className="font-mono text-xl sm:text-2xl font-black tracking-tight flex items-center space-x-1">
              <span className="text-white">TUSHAR</span>
              <span className="text-blue-500">.DEV</span>
            </a>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-mono text-sm text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#lab" className="hover:text-blue-400 transition-colors">Lab</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          {/* Right Status & CTA */}
          <div className="hidden sm:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full font-mono text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for opportunities</span>
            </div>

            <button 
              onClick={() => setActiveModal('resume')}
              className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-600/20 flex items-center space-x-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3 font-mono text-sm">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400">About</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400">Projects</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400">Experience</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400">Skills</a>
            <a href="#lab" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400">Lab</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400">Contact</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setActiveModal('resume'); }}
              className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg font-mono text-xs flex items-center justify-center space-x-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0e17] to-[#0a0e17] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Greeting & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-md">
                <span className="font-bold">&gt; Hello, I'm</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Tushar <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">DevOps Engineer</span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
                I build, deploy and maintain reliable systems for cloud, on-premise and industrial automation. Passionate about automation, infrastructure, and solving real-world problems.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm px-6 py-3.5 rounded-xl font-semibold transition-all shadow-xl shadow-blue-600/30 flex items-center space-x-2 group">
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => setActiveModal('contact')}
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-sm px-6 py-3.5 rounded-xl font-semibold transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Contact Me</span>
                </button>
              </div>
            </div>

            {/* Right Column: Isometric Architecture Graphic */}
            <div className="lg:col-span-6">
              <div className="relative bg-gradient-to-br from-slate-900/90 to-[#111827] border border-slate-800/80 rounded-2xl p-6 shadow-2xl overflow-hidden group">
                
                {/* Floating Micro-Service Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400"><Layers className="w-5 h-5" /></div>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">CI/CD Automation</div>
                      <div className="text-[11px] text-slate-400">Jenkins, GitHub Actions, Azure</div>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400"><Cloud className="w-5 h-5" /></div>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">Cloud Infrastructure</div>
                      <div className="text-[11px] text-slate-400">AWS, Azure, Linux Servers</div>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><Server className="w-5 h-5" /></div>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">Containerization</div>
                      <div className="text-[11px] text-slate-400">Docker, Kubernetes, Dokploy</div>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400"><Activity className="w-5 h-5" /></div>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">Monitoring & Observability</div>
                      <div className="text-[11px] text-slate-400">Prometheus, Grafana, ELK</div>
                    </div>
                  </div>
                </div>

                {/* Architecture Visual */}
                <div className="rounded-xl overflow-hidden border border-slate-800/80 relative">
                  <img 
                    src="./assets/devops-architecture.jpg" 
                    alt="DevOps Architecture" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="p-3 bg-[#070a10] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center space-x-1.5 text-blue-400">
                      <Server className="w-3.5 h-3.5" />
                      <span>Active Control Plane: AWS & Industrial Edge</span>
                    </span>
                    <span className="text-emerald-400">● 99.9% Online</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-16 pt-8 border-t border-slate-800/80 font-mono">
            <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">4+</div>
              <div className="text-xs text-slate-400 mt-1">Years Experience</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">20+</div>
              <div className="text-xs text-slate-400 mt-1">Projects Deployed</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">132+</div>
              <div className="text-xs text-slate-400 mt-1">Repositories Migrated</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">99.9%</div>
              <div className="text-xs text-slate-400 mt-1">System Uptime</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl text-center col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">10+</div>
              <div className="text-xs text-slate-400 mt-1">Live Deployments</div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <div className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-2">[ PORTFOLIO ARCHIVES ]</div>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <a href="#contact" className="mt-4 sm:mt-0 font-mono text-xs text-blue-400 hover:text-blue-300 flex items-center space-x-1">
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                onClick={() => setActiveModal(project)}
                className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-blue-500/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-[11px] px-2.5 py-1 rounded border ${project.badgeColor}`}>
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-mono mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-sans mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="font-mono text-[10px] bg-slate-800/90 border border-slate-700/60 px-2 py-0.5 rounded text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs text-blue-400">
                    <span>Inspect Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Three-Column Lower Section: Experience, Tech Stack, About Me */}
      <section id="about" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Experience Timeline */}
            <div id="experience" className="lg:col-span-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>Experience</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">Timeline</span>
              </div>

              <div className="space-y-6 border-l-2 border-slate-800 pl-4 ml-2">
                
                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-900"></span>
                  <div className="font-mono text-xs text-blue-400 mb-1">2024 – Present</div>
                  <h4 className="font-bold text-white text-sm">Senior DevOps Engineer</h4>
                  <div className="text-xs text-slate-400 mb-2">Nido Machineries Pvt Ltd</div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Deployed and maintained WMS/WCS systems, CI/CD pipelines, server management, monitoring & industrial automation.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-900"></span>
                  <div className="font-mono text-xs text-slate-500 mb-1">2021 – 2024</div>
                  <h4 className="font-bold text-white text-sm">Automation Engineer</h4>
                  <div className="text-xs text-slate-400 mb-2">Flipkart Automation</div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Worked on sorting machines and automation systems, machine integration and technical support.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-900"></span>
                  <div className="font-mono text-xs text-slate-500 mb-1">2019 – 2021</div>
                  <h4 className="font-bold text-white text-sm">Technical Support Engineer</h4>
                  <div className="text-xs text-slate-400 mb-2">Nedo Automation</div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Installation, troubleshooting and support. PLC, SCADA, Industrial control systems.
                  </p>
                </div>

              </div>
            </div>

            {/* Middle: Tech Stack Matrix */}
            <div id="skills" className="lg:col-span-5 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
                  <CpuIcon className="w-5 h-5 text-blue-400" />
                  <span>Tech Stack</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">Matrix</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800 gap-2">
                  <span className="text-slate-400 w-28">Cloud</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">AWS</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Azure</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Linux Servers</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800 gap-2">
                  <span className="text-slate-400 w-28">Containers</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Docker</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Kubernetes</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Dokploy</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800 gap-2">
                  <span className="text-slate-400 w-28">CI/CD</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">GitHub Actions</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Jenkins</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">GitLab CI</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800 gap-2">
                  <span className="text-slate-400 w-28">Monitoring</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Prometheus</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Grafana</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">ELK</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800 gap-2">
                  <span className="text-slate-400 w-28">Databases</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">PostgreSQL</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Redis</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">SQLite</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 gap-2">
                  <span className="text-slate-400 w-28">Languages</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Python</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">JavaScript</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">TypeScript</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-200 border border-slate-700">Bash</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: About Me & Connect */}
            <div className="lg:col-span-3 space-y-6">
              
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white font-mono mb-4 flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span>About Me</span>
                </h3>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-700 shrink-0 bg-slate-800">
                    <img 
                      src="./assets/tushar-profile.jpg" 
                      alt="Tushar" 
                      className="w-full h-full object-cover"
                      onError={(e)=>{ (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'; }} 
                    />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-blue-400">&gt; whoami</div>
                    <div className="font-bold text-white text-sm">Tushar Kanti Acharyya</div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
                  I'm a DevOps Engineer with 4+ years of experience in industrial automation and cloud infrastructure. I enjoy building automation systems, managing Linux servers, deploying applications and working on real-world problems.
                </p>

                <div className="space-y-2 font-mono text-[11px] text-slate-300">
                  <div className="flex items-center space-x-2 bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span>Based in India</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Open to opportunities</span>
                  </div>
                </div>
              </div>

              <div id="contact" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
                <h3 className="text-base font-bold text-white font-mono mb-4">Let's Connect</h3>
                
                <div className="space-y-3 font-mono text-xs mb-4">
                  <a href="mailto:tushar.codespace@gmail.com" className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors truncate">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">tushar.codespace@gmail.com</span>
                  </a>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <a href="https://github.com/Tushar-CodeSpace" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>

                <button 
                  onClick={() => setActiveModal('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Terminal / Lab Section */}
      <section id="lab" className="py-20 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <div className="font-mono text-xs text-blue-400 uppercase tracking-widest">[ INTERACTIVE CONTROL PLANE ]</div>
            <h2 className="text-3xl font-bold text-white font-mono">Talk to Snyder's Terminal</h2>
            <p className="text-slate-400 text-sm font-sans">
              Type commands below like <code className="text-blue-400 bg-slate-900 px-2 py-0.5 rounded">help</code>, <code className="text-blue-400 bg-slate-900 px-2 py-0.5 rounded">skills</code>, <code className="text-blue-400 bg-slate-900 px-2 py-0.5 rounded">projects</code>, or <code className="text-emerald-400 bg-slate-900 px-2 py-0.5 rounded">sudo hire</code>.
            </p>
          </div>

          <div className="bg-[#070a10] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono">
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-xs text-slate-400">snyder@control-plane:~</div>
              <div className="text-xs text-slate-500">bash</div>
            </div>

            <div className="p-6 text-xs sm:text-sm text-slate-300 space-y-2 min-h-[220px] max-h-[350px] overflow-y-auto">
              {terminalLogs.map((log, index) => (
                <div key={index} className={`${log.type === 'cmd' ? 'text-blue-400' : log.type === 'success' ? 'text-emerald-400 font-bold' : 'text-slate-300 pl-2'}`}>
                  {log.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="bg-slate-900 border-t border-slate-800 px-4 py-3 flex items-center space-x-3">
              <span className="text-blue-400 text-xs sm:text-sm font-bold">snyder@control-plane:~$</span>
              <input 
                type="text" 
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command (e.g. help, skills, sudo hire)..." 
                className="bg-transparent flex-1 text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-slate-600"
              />
              <button type="submit" className="text-xs font-mono bg-blue-600 text-white px-3.5 py-1.5 rounded-lg font-bold hover:bg-blue-500 transition-colors cursor-pointer">
                Run
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-10 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All systems operational. Ready for deployment.</span>
          </div>
          <div className="text-slate-500">
            © 2026 Tushar Kanti Acharyya. Built with React & Tailwind CSS.
          </div>
        </div>
      </footer>

      {/* MODALS */}

      {/* Project Inspector Modal */}
      {activeModal && typeof activeModal === 'object' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setActiveModal(null)}>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl font-sans" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">{activeModal.category}</span>
            <h3 className="text-2xl font-bold text-white font-mono mt-1 mb-3">{activeModal.title}</h3>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              {activeModal.details}
            </p>

            <div className="mb-6">
              <div className="font-mono text-xs text-slate-400 mb-2">Technologies Used:</div>
              <div className="flex flex-wrap gap-2">
                {activeModal.tech.map((t: string, idx: number) => (
                  <span key={idx} className="font-mono text-xs bg-slate-800 border border-slate-700 px-3 py-1 rounded text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-800">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Close Spec
              </button>
              <a 
                href="#contact" 
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-mono text-xs hover:bg-blue-500 transition-colors flex items-center space-x-1.5"
              >
                <span>Discuss Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {activeModal === 'resume' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl font-sans" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-white font-mono">Tushar Kanti Acharyya - Resume</h3>
                <span className="font-mono text-xs text-slate-400">Senior DevOps & Automation Engineer</span>
              </div>
            </div>

            <div className="bg-[#070a10] border border-slate-800 p-4 rounded-xl font-mono text-xs text-slate-300 space-y-2 mb-6 max-h-60 overflow-y-auto">
              <p className="font-bold text-white">SUMMARY:</p>
              <p>4+ years of professional experience scaling cloud infrastructure, AWS clusters, Docker/Kubernetes container orchestration, and industrial WMS/WCS pipelines.</p>
              <p className="font-bold text-white pt-2">EXPERIENCE:</p>
              <p>- Senior DevOps Engineer @ Nido Machineries (2024–Present)</p>
              <p>- Automation Engineer @ Flipkart Automation (2021–2024)</p>
              <p>- Technical Support Engineer @ Nedo Automation (2019–2021)</p>
            </div>

            <div className="flex items-center justify-end space-x-3">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs hover:bg-slate-700 cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  window.print();
                }}
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold hover:bg-blue-500 transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {activeModal === 'contact' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl font-sans" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-white font-mono mb-1">Initiate Handshake</h3>
            <p className="text-slate-400 text-xs mb-6 font-mono">Send a secure transmission directly to Tushar's inbox.</p>

            {isSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-center font-mono text-xs">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
                Transmission successful! Opening email client...
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">SENDER_NAME</label>
                  <input 
                    type="text" 
                    required 
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    placeholder="e.g. Recruiter / Engineer" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">RETURN_EMAIL</label>
                  <input 
                    type="email" 
                    required 
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="name@company.com" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">TRANSMISSION_MESSAGE</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Discussing DevOps role, infrastructure scaling..." 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-blue-500 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
