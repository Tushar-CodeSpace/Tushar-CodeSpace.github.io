import React, { useState } from 'react';
import { X, Send, Mail, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg rounded-2xl bg-[#0b1224] border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-sky-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              Get in Touch
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Email Banner */}
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
          <div className="text-xs">
            <span className="text-slate-400">Direct Email: </span>
            <span className="text-sky-300 font-mono font-medium">{PERSONAL_INFO.email}</span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center space-x-1 cursor-pointer transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-sky-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Johnson"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder:text-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              Your Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder:text-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              Subject
            </label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="DevOps Opportunity / Project Collaboration"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder:text-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Tushar, we loved your portfolio and would like to discuss..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder:text-slate-600 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitted}
              className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] cursor-pointer"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950" />
                  <span>Opening Mail Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

