import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'neofetch',
      output: (
        <div className="font-mono text-xs space-y-1 text-slate-300">
          <div className="text-sky-400 font-bold">tushar@production-node01</div>
          <div>-----------------------</div>
          <div><span className="text-sky-300 font-semibold">OS:</span> Ubuntu 24.04 LTS x86_64</div>
          <div><span className="text-sky-300 font-semibold">Host:</span> DevOps Hybrid Cluster Node</div>
          <div><span className="text-sky-300 font-semibold">Kernel:</span> 6.8.0-45-generic</div>
          <div><span className="text-sky-300 font-semibold">Uptime:</span> 99.98% (4+ Years in Prod)</div>
          <div><span className="text-sky-300 font-semibold">Packages:</span> docker, k8s, helm, prometheus, grafana</div>
          <div><span className="text-sky-300 font-semibold">Shell:</span> bash 5.2.21</div>
          <div><span className="text-sky-300 font-semibold">Status:</span> Available for opportunities</div>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>(['neofetch']);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const suggestedCommands = [
    'help',
    'whoami',
    'docker ps',
    'kubectl get pods',
    'uptime',
    'cat resume.txt',
    'curl health',
    'clear',
  ];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let result: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        result = (
          <div className="space-y-1 text-xs font-mono">
            <div className="text-sky-400 font-semibold">Available Commands:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-emerald-400">whoami</span> - Display engineer profile</div>
              <div><span className="text-emerald-400">docker ps</span> - List running production containers</div>
              <div><span className="text-emerald-400">kubectl get pods</span> - Check Kubernetes pods</div>
              <div><span className="text-emerald-400">cat resume.txt</span> - View resume summary</div>
              <div><span className="text-emerald-400">uptime</span> - Cluster availability metrics</div>
              <div><span className="text-emerald-400">curl health</span> - API health status</div>
              <div><span className="text-emerald-400">skills</span> - List primary DevOps stack</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        result = (
          <div className="font-mono text-xs text-slate-300 space-y-1">
            <p className="text-sky-300 font-bold">{PERSONAL_INFO.name} - Senior {PERSONAL_INFO.title}</p>
            <p>Location: {PERSONAL_INFO.location} | Open to remote/hybrid roles</p>
            <p>Email: {PERSONAL_INFO.email}</p>
            <p className="text-slate-400">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'docker':
        if (args[0] === 'ps') {
          result = (
            <div className="font-mono text-[11px] overflow-x-auto text-slate-300 leading-relaxed">
              <div className="text-slate-500">CONTAINER ID   IMAGE                                COMMAND                  STATUS         PORTS                    NAMES</div>
              <div>a839f1c29e01   octyn/deployment-engine:v2.4         "/entrypoint.sh"         Up 42 days     0.0.0.0:443-&gt;443/tcp    octyn-prod</div>
              <div>748b92d84a12   nido/wms-telemetry-agent:v1.9        "python agent.py"        Up 19 days     0.0.0.0:8080-&gt;8080/tcp  nido-wms-gateway</div>
              <div>52c039d910fe   monitoring/prometheus:v2.54          "/bin/prometheus"        Up 90 days     0.0.0.0:9090-&gt;9090/tcp  prometheus-core</div>
              <div>19d832ea772b   grafana/grafana:11.1.0               "/run.sh"                Up 90 days     0.0.0.0:3000-&gt;3000/tcp  grafana-viz</div>
            </div>
          );
        } else {
          result = <span className="text-amber-400 font-mono text-xs">Try: docker ps</span>;
        }
        break;

      case 'kubectl':
        result = (
          <div className="font-mono text-[11px] overflow-x-auto text-slate-300 leading-relaxed">
            <div className="text-slate-500">NAMESPACE     NAME                                    READY   STATUS    RESTARTS   AGE</div>
            <div>production    octyn-core-7d498b584c-z7k29             2/2     Running   0          42d</div>
            <div>production    wms-sorter-connector-5c98d6-x8m11      1/1     Running   0          19d</div>
            <div>monitoring    central-telemetry-agent-865cf9-p4q2     1/1     Running   0          90d</div>
            <div>monitoring    grafana-deployment-647d9b9c9f-k2l19     1/1     Running   0          90d</div>
            <div>ingress       traefik-gateway-ingress-74fb8-88j1      1/1     Running   0          120d</div>
          </div>
        );
        break;

      case 'cat':
        if (args[0] === 'resume.txt' || args[0] === 'resume') {
          result = (
            <div className="font-mono text-xs text-slate-300 space-y-1">
              <div className="text-sky-400 font-bold">--- TUSHAR // DEVOPS ENGINEER ---</div>
              <div>Experience: 4+ Years | Live Deployments: 10+ | Repos Migrated: 132+</div>
              <div>Companies: Nido Machineries, Flipkart Automation, Nedo Automation</div>
              <div>Core: AWS, Azure, Docker, Kubernetes, Prometheus, Grafana, Python, CI/CD</div>
              <div className="text-emerald-400">Status: Actively interviewing for Senior DevOps & SRE roles.</div>
            </div>
          );
        } else {
          result = <span className="text-red-400 font-mono text-xs">cat: {args[0] || 'file'}: No such file</span>;
        }
        break;

      case 'uptime':
        result = (
          <span className="font-mono text-xs text-emerald-400">
            12:48:10 up 1460 days, 23:14, 1 user, load average: 0.12, 0.08, 0.05 (99.98% SLA)
          </span>
        );
        break;

      case 'curl':
        result = (
          <div className="font-mono text-xs text-slate-300">
            {"{"}<br/>
            &nbsp;&nbsp;"status": "healthy",<br/>
            &nbsp;&nbsp;"cluster": "tushar-devops-mesh",<br/>
            &nbsp;&nbsp;"services": "all operational",<br/>
            &nbsp;&nbsp;"contact": "{PERSONAL_INFO.email}"<br/>
            {"}"}
          </div>
        );
        break;

      case 'skills':
        result = (
          <div className="font-mono text-xs text-slate-300">
            <span className="text-sky-400 font-bold">Cloud & DevOps:</span> AWS, Azure, GCP, Docker, Kubernetes, Helm, Terraform, Ansible<br/>
            <span className="text-emerald-400 font-bold">Observability:</span> Prometheus, Grafana, ELK, Custom Python Telemetry Agents<br/>
            <span className="text-amber-400 font-bold">Industrial:</span> WMS, WCS, SCADA, PLC Hardware Telemetry, Edge Linux Gateways
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        result = (
          <span className="text-red-400 font-mono text-xs">
            command not found: {trimmed}. Type <span className="text-sky-300 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for available commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: result }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <section id="lab" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="mb-8">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1 flex items-center space-x-2">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive DevOps Environment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            DevOps Terminal Lab
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Simulated live node. Try typing commands like <code className="text-sky-300">whoami</code>, <code className="text-sky-300">docker ps</code>, or <code className="text-sky-300">kubectl get pods</code>.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-xl border border-slate-800 bg-[#080d1a] shadow-2xl overflow-hidden font-mono">
          
          {/* Terminal Window Header Bar */}
          <div className="bg-[#0b1224] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs text-slate-400 ml-2 font-mono">tushar@cloud-gateway-01:~</span>
            </div>

            <div className="flex items-center space-x-3 text-slate-400">
              <button 
                onClick={() => setHistory([])}
                className="hover:text-white transition-colors"
                title="Clear terminal"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick command pills */}
          <div className="px-4 py-2 bg-[#0a0f21] border-b border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[11px] text-slate-500">Quick run:</span>
            {suggestedCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-sky-400 hover:text-sky-300 transition-all text-[11px] cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Output Body */}
          <div className="p-4 sm:p-5 max-h-96 min-h-64 overflow-y-auto space-y-4">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-emerald-400 font-bold">tushar@production:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <div className="pl-3 border-l border-slate-800">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center space-x-2 text-xs pt-1">
              <span className="text-emerald-400 font-bold">tushar@production:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. help, docker ps, whoami)..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600 focus:ring-0 text-xs"
                autoFocus
              />
            </div>
            <div ref={terminalEndRef} />
          </div>

        </div>

      </div>
    </section>
  );
};

