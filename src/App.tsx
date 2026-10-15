import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechStack } from './components/TechStack';
import { AboutAndConnect } from './components/AboutAndConnect';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-300 relative bg-grid-pattern">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Featured Projects Grid */}
        <FeaturedProjects 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Three-Column Section: Experience, Tech Stack, About & Connect */}
        <section className="py-16 lg:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Column 1: Experience */}
              <div className="lg:col-span-1">
                <ExperienceTimeline />
              </div>

              {/* Column 2: Tech Stack */}
              <div className="lg:col-span-1">
                <TechStack />
              </div>

              {/* Column 3: About Me & Let's Connect */}
              <div className="lg:col-span-1">
                <AboutAndConnect 
                  onOpenContact={() => setIsContactOpen(true)}
                  onOpenResume={() => setIsResumeOpen(true)}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Interactive DevOps Terminal Lab */}
        <InteractiveTerminal />

        {/* Engineering Blog Section */}
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}

export default App;

