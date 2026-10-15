import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 lg:py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1 flex items-center space-x-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Notes & Post-Mortems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Engineering Blog
            </h2>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group flex flex-col justify-between rounded-xl bg-[#0b1224]/85 border border-slate-800/80 hover:border-sky-500/40 p-5 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="space-y-3">
                {/* Meta info */}
                <div className="flex items-center space-x-3 text-slate-400 text-[11px] font-mono">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-sky-400" />
                    <span>{post.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom tags & read button */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center space-x-1 text-xs font-semibold text-sky-400 group-hover:text-sky-300">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0b1224] border border-slate-700 p-6 sm:p-8 space-y-5 text-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Engineering Article</span>
              <button 
                onClick={() => setSelectedPost(null)}
                className="text-slate-400 hover:text-white text-xs font-mono px-2 py-1 rounded bg-slate-800"
              >
                ESC / Close
              </button>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedPost.title}</h2>
              <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4 pt-2">
              <p className="font-medium text-sky-200">
                {selectedPost.excerpt}
              </p>
              <h4 className="text-sm font-bold text-white pt-2">Architecture Challenges & Resolution</h4>
              <p>
                In high-velocity production environments, reliability is non-negotiable. By orchestrating decoupled microservices with containerization (Docker) and declarative CI/CD pipelines (GitHub Actions), we eliminated manual intervention points.
              </p>
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-400">
                # Key Takeaway:<br/>
                - Sub-second PLC heartbeat verification<br/>
                - Automated canary rollouts with instant rollback triggers<br/>
                - Comprehensive Prometheus telemetry alerting on SLO degradation
              </div>
              <p>
                Real-world deployments require rigorous testing, infrastructure-as-code consistency, and relentless observability. Continual feedback loops ensure that edge hardware and centralized cloud services remain synchronized under any operational load.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-lg bg-sky-500 text-slate-950 font-semibold text-xs"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

