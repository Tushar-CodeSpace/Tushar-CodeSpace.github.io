import React from 'react';
import { X, Download, Printer, ExternalLink, Check, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, TECH_STACK, STATS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
TUSHAR - DEVOPS ENGINEER
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
Location: ${PERSONAL_INFO.location}
Status: ${PERSONAL_INFO.status}

SUMMARY:
${PERSONAL_INFO.bio}

METRICS & ACHIEVEMENTS:
- 4+ Years of Production Experience
- 20+ Deployed Projects across Cloud & Industrial Edge
- 132+ Git Repositories Migrated to Automated CI/CD
- 99.9% Production SLA / System Uptime

WORK EXPERIENCE:
1. Senior DevOps Engineer | Nido Machineries Pvt Ltd (2024 - Present)
   - Deployed and maintained WMS/WCS systems
   - CI/CD pipelines, server management, monitoring
   - Industrial automation and cloud integration

2. Automation Engineer | Flipkart Automation (2021 - 2024)
   - Worked on sorting machines and automation systems
   - Machine integration and technical support
   - On-site and remote deployment

3. Technical Support Engineer | Nedo Automation (2019 - 2021)
   - Installation, troubleshooting and support
   - PLC, SCADA, industrial control systems

CORE SKILLS:
- Cloud: AWS, Azure, GCP, DigitalOcean
- Containers: Docker, Kubernetes, Helm, Dokploy
- CI/CD: GitHub Actions, Jenkins, Azure Pipelines, GitLab CI
- Observability: Prometheus, Grafana, ELK Stack, Datadog
- Databases: PostgreSQL, MongoDB, Redis, MySQL
- Scripting: Python, Bash / Shell, TypeScript
- Systems: Linux (Ubuntu/Debian), Nginx, Terraform, Ansible
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Tushar_DevOps_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b1224] border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
              Resume Preview & Download
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center space-x-1"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-6 font-sans">
          
          {/* Header section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-sky-400 font-semibold text-sm">
                Senior DevOps & Infrastructure Engineer
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1 font-mono sm:text-right">
              <div>{PERSONAL_INFO.email}</div>
              <div>{PERSONAL_INFO.location} • Remote / Hybrid</div>
              <div>github.com/Tushar-CodeSpace</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-2">
              Professional Summary
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
              Work Experience
            </h3>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{exp.role}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{exp.period}</span>
                </div>
                <div className="text-sky-400 font-medium">{exp.company} • {exp.location}</div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pt-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-2">
              Technical Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {TECH_STACK.map((group) => (
                <div key={group.category} className="p-2 rounded bg-[#0b1224] border border-slate-800">
                  <span className="font-semibold text-sky-300">{group.category}: </span>
                  <span className="text-slate-300">
                    {group.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

