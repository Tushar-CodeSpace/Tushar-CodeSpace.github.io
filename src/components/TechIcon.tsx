import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6" }) => {
  const normalized = name.toLowerCase().replace(/[\s\-_/.]/g, '');

  switch (normalized) {
    case 'github':
    case 'githubactions':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
        </svg>
      );
    case 'twitter':
    case 'x':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5c-3.1 0-5.2-1.7-5.2-4.2 0-2.4 2-4.2 5.1-4.2 1.3 0 2.5.4 3.3 1v1.6c-.8-.7-1.8-1-2.9-1-1.9 0-3.1 1-3.1 2.5 0 1.6 1.2 2.6 3.1 2.6 1.1 0 2.1-.4 2.9-1.1v1.7c-.8.8-2 1.1-3.2 1.1zm7.3 0h-2V8.5h2v8z" fill="#FF9900"/>
        </svg>
      );
    case 'azure':
    case 'azuredevops':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M13.05 4.24l-6.84 8.04 4.54 2.87-5.75 4.61h13.2l-5.15-15.52z" fill="#0089D6"/>
          <path d="M5 19.76l8.05-15.52-5.75 6.74 3.45 2.18-5.75 6.6z" fill="#0072C6" opacity="0.8"/>
        </svg>
      );
    case 'gcp':
    case 'googlecloud':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          <path d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#34A853"/>
        </svg>
      );
    case 'digitalocean':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#0080FF">
          <path d="M12.04 0C5.41 0 .04 5.37.04 12c0 4.14 2.1 7.79 5.29 9.94l3.19-3.19c-1.89-1.29-3.13-3.46-3.13-5.91 0-3.94 3.2-7.14 7.15-7.14 3.94 0 7.14 3.2 7.14 7.14 0 3.94-3.2 7.14-7.14 7.14v4.35c6.63 0 12-5.37 12-12S18.67 0 12.04 0z"/>
          <path d="M12.04 19.33v-4.35c-2.4 0-4.35-1.95-4.35-4.35h-4.35c0 4.8 3.9 8.7 8.7 8.7z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#2496ED">
          <path d="M13.98 10.15h1.99V8.16h-1.99v1.99zm-2.49 0h1.99V8.16h-1.99v1.99zm-2.49 0h1.99V8.16H9v1.99zm-2.49 0h1.99V8.16H6.51v1.99zm-2.49 0H6V8.16H4.02v1.99zm7.47-2.49h1.99V5.67h-1.99v1.99zm-2.49 0h1.99V5.67H9v1.99zm-2.49 0h1.99V5.67H6.51v1.99zm9.96 0h1.99V5.67h-1.99v1.99zM23.5 11.2c-.36-.26-1.57-.42-2.39-.02-.12-.8-.67-1.47-1.39-1.84l-.56-.28-.38.5c-.5.66-.72 1.48-.64 2.29-.39.2-1.78.85-3.83.85H2.17c-.32 1.25-.09 3.55 1.15 5.25C5.07 20.36 8.5 21 12.5 21c7.2 0 10.9-4.3 11-8.5.01-.43-.02-.87-.07-1.3h.07z"/>
        </svg>
      );
    case 'kubernetes':
    case 'k8s':
    case 'k3s':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#326CE5">
          <path d="M11.99 2.25L4.5 6.58v8.66l7.49 4.33 7.49-4.33V6.58L11.99 2.25zm-.1 2.21l5.44 3.14-1.92 1.1-3.52-2.03-3.52 2.03-1.92-1.1 5.44-3.14zM6.22 8.7l1.92 1.1v4.06l-1.92 1.1V8.7zm6.78 8.16v-2.22l2.67-1.54 1.92 1.1-4.59 2.66zm-2.01 0l-4.59-2.66 1.92-1.1 2.67 1.54v2.22zm1-3.57l-2.73-1.58 2.73-1.58 2.73 1.58-2.73 1.58zm5.79-2.39l-1.92-1.1V8.7l1.92-1.1v4.06z"/>
        </svg>
      );
    case 'helm':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#0F1689">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.24l6.75 3.75v7.5L12 19.24 5.25 15.49V7.99L12 4.24z" fill="#2496ED"/>
          <circle cx="12" cy="12" r="3" fill="#38BDF8"/>
        </svg>
      );
    case 'portainer':
    case 'dokploy':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#13BEF9">
          <rect x="3" y="3" width="7" height="7" rx="1.5"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5"/>
          <rect x="14" y="14" width="7" height="7" rx="1.5"/>
        </svg>
      );
    case 'jenkins':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#D33833"/>
          <path d="M12 6c-2.2 0-4 1.8-4 4 0 1.5.8 2.8 2 3.5V17h4v-3.5c1.2-.7 2-2 2-3.5 0-2.2-1.8-4-4-4z" fill="#FFF"/>
          <path d="M10 17h4v2h-4z" fill="#335061"/>
        </svg>
      );
    case 'gitlab':
    case 'gitlabci':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M22.65 14.39L20.6 8.08a.75.75 0 00-1.43 0l-1.92 5.9H6.75l-1.92-5.9a.75.75 0 00-1.43 0l-2.05 6.31a.75.75 0 00.27.83l10.08 7.33a.75.75 0 00.89 0l10.08-7.33a.75.75 0 00.27-.83z" fill="#E24329"/>
          <path d="M12 22.55l5.25-16.14H6.75L12 22.55z" fill="#FC6D26"/>
          <path d="M12 22.55L6.75 6.41 1.67 14.39 12 22.55z" fill="#FCA326"/>
          <path d="M12 22.55l5.25-16.14 5.08 7.98L12 22.55z" fill="#FCA326"/>
        </svg>
      );
    case 'grafana':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#F46800">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 11.5v1.25c0 1.24 1.01 2.25 2.25 2.25H12v2.93h1zm5.9-3.24c-.32.55-.71 1.05-1.16 1.49l-1.74-1.74V14c0-.55-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1V8.83l1.88-1.88c.84 1.13 1.41 2.47 1.58 3.93.07.59.08 1.19.04 1.78-.05.74-.23 1.43-.6 2.03z"/>
        </svg>
      );
    case 'prometheus':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#E6522C">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V17c-1.66 0-3-1.34-3-3s1.34-3 3-3V7c-2.76 0-5 2.24-5 5 0 2.21 1.44 4.09 3.43 4.73l.57.19V21.8c.65.13 1.32.2 2 .2s1.35-.07 2-.2v-4.88l.57-.19C18.56 16.09 20 14.21 20 12c0-2.76-2.24-5-5-5v4c1.66 0 3 1.34 3 3s-1.34 3-3 3v4.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/>
        </svg>
      );
    case 'elk':
    case 'elasticsearch':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="7" cy="12" r="4" fill="#005571"/>
          <circle cx="17" cy="12" r="4" fill="#FED136"/>
          <path d="M12 4v16" stroke="#00BFB3" strokeWidth="3"/>
        </svg>
      );
    case 'datadog':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#632CA6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.5l-2.3-1.2-1.5 2.2-1.5-2.2-2.3 1.2 1-2.4-2.2-1.5 2.6-.2.9-2.4.9 2.4 2.6.2-2.2 1.5 1 2.4z"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#336791">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 14h-4v-2h4v2zm2-4H8V9c0-1.66 1.34-3 3-3h2c1.66 0 3 1.34 3 3v3z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#47A248">
          <path d="M12 2.5s-6 5.5-6 10.5c0 3.8 2.6 6.8 6 7.5 3.4-.7 6-3.7 6-7.5C18 8 12 2.5 12 2.5zm.3 16.5v-7.3c.7.2 1.4.6 1.7 1.2.5.8.5 1.9-.1 2.7-.4.6-.9 1.1-1.6 1.4v2zm-.6 0c-.7-.3-1.2-.8-1.6-1.4-.6-.8-.6-1.9-.1-2.7.3-.6 1-1 1.7-1.2v5.3z"/>
        </svg>
      );
    case 'redis':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#DC382D">
          <path d="M2 9.5l10-5 10 5-10 5-10-5zm0 5l10 5 10-5M2 19.5l10 5 10-5" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#4479A1">
          <path d="M12 3C6.5 3 2 7.5 2 13c0 3.5 1.8 6.6 4.5 8.4l1.5-2C5.8 18 4.5 15.6 4.5 13c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5c0 2.6-1.3 5-3.5 6.4l1.5 2c2.7-1.8 4.5-4.9 4.5-8.4 0-5.5-4.5-10-10-10z"/>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.03 1.4h2.9v.4H6.1s-1.8.2-1.8 2.9 1.6 2.8 1.6 2.8h1v-1.4s-.1-1.6 1.6-1.6h2.7s1.5-.1 1.5-1.5V3.5s.4-1.5-2.2-1.5zm-1.6 1.1c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6z" fill="#3776AB"/>
          <path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.03-1.4h-2.9v-.4h5.8s1.8-.2 1.8-2.9-1.6-2.8-1.6-2.8h-1v1.4s.1 1.6-1.6 1.6h-2.7s-1.5.1-1.5 1.5v2.8s-.4 1.5 2.2 1.5zm1.6-1.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z" fill="#FFD43B"/>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M7 17.5c.5.8 1.2 1.3 2.1 1.3 1.1 0 1.9-.7 1.9-2.3v-6.3h-1.8v6.2c0 .6-.3.9-.7.9-.4 0-.7-.2-.9-.6l-.6.8zm7.4 1.3c2.1 0 3.5-1.1 3.5-2.9 0-1.8-1.1-2.4-2.5-3-.9-.4-1.3-.7-1.3-1.3 0-.5.4-.9 1.1-.9.6 0 1.1.2 1.5.7l.9-.8c-.7-.8-1.5-1.1-2.4-1.1-1.7 0-2.9 1.1-2.9 2.6 0 1.7 1.1 2.3 2.5 2.9.9.4 1.4.8 1.4 1.4 0 .7-.6 1.1-1.4 1.1-.9 0-1.6-.4-2-1.1l-.8.8c.6.9 1.6 1.6 2.9 1.6z" fill="#000000"/>
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="3" fill="#3178C6"/>
          <path d="M12.5 10.5H8.5V9H17v1.5h-4v9.5h-1.5v-9.5zm5.5 8c.6.7 1.4 1.1 2.3 1.1 1.3 0 2.2-.8 2.2-2.1 0-1.3-.8-1.8-2-2.3-.9-.4-1.2-.6-1.2-1.1 0-.4.3-.7.9-.7.5 0 1 .2 1.3.6l.8-.9c-.6-.6-1.3-.8-2.1-.8-1.4 0-2.3.9-2.3 2.1 0 1.3.8 1.8 1.9 2.2.9.4 1.3.7 1.3 1.2 0 .5-.5.9-1.2.9-.7 0-1.3-.4-1.7-1l-.9.9z" fill="#FFFFFF"/>
        </svg>
      );
    case 'bash':
    case 'bashshell':
    case 'shell':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="3" fill="#293138"/>
          <path d="M5 8l4 4-4 4M11 16h6" stroke="#4EAA25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'nginx':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#009639">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm6.5 14.5l-2.5-4.2v4.2H14V7.5h2l2.5 4.3V7.5h2v9h-2zm-7.5 0H9V7.5h2v9z"/>
        </svg>
      );
    case 'linux':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#FCC624">
          <path d="M12 2C9.5 2 8 4 8 7c0 1.2.3 2.3.8 3.2C7 11.5 5 14 5 17c0 2 1.5 4 4 4h6c2.5 0 4-2 4-4 0-3-2-5.5-3.8-6.8.5-.9.8-2 .8-3.2 0-3-1.5-5-4-5z" fill="#FCC624"/>
          <ellipse cx="10.5" cy="6.5" rx="1" ry="1.5" fill="#000"/>
          <ellipse cx="13.5" cy="6.5" rx="1" ry="1.5" fill="#000"/>
          <path d="M11 8.5h2l-1 1.5z" fill="#E67E22"/>
        </svg>
      );
    case 'terraform':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#7B42BC">
          <path d="M1.5 2l6.5 3.8v7.5l-6.5-3.8V2zm7.5 4.3l6.5 3.8v7.5L9 13.8V6.3zm7.5 4.3l6-3.5v7.2l-6 3.5v-7.2zM9 15.3l6.5 3.8v7.5L9 22.8v-7.5z"/>
        </svg>
      );
    case 'ansible':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#000000"/>
          <path d="M12 5.5l5 13h-2.3l-1.2-3.3h-3.1L9.2 18.5H6.9l5.1-13zm-.1 3.5l-1.1 3.2h2.2l-1.1-3.2z" fill="#FFFFFF"/>
        </svg>
      );
    case 'nido':
      return (
        <div className="flex items-center justify-center font-black tracking-wider text-sky-400 bg-sky-950/60 border border-sky-500/40 rounded px-2 py-0.5 text-xs">
          NIDO
        </div>
      );
    case 'flipkart':
      return (
        <div className="flex items-center justify-center font-bold bg-[#2874F0] text-[#FFE500] rounded px-1.5 py-0.5 text-xs shadow-sm">
          <span>f</span>
        </div>
      );
    case 'nedo':
      return (
        <div className="flex items-center justify-center font-black tracking-widest text-slate-300 bg-slate-800/80 border border-slate-700 rounded px-2 py-0.5 text-xs">
          NEDO
        </div>
      );
    default:
      return (
        <div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-sky-400">
          {name.charAt(0)}
        </div>
      );
  }
};

