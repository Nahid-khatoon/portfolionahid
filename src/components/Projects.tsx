import React from 'react';
import {
  ArrowRight,
  FolderGit2,
  Eye,
  ExternalLink,
  Sparkles,
  Globe,
  Info,
  Building2,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const featuredProjects = PORTFOLIO_DATA.projects.filter((p) => p.isFeatured);
  const otherProjects = PORTFOLIO_DATA.projects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Software Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            National hackathon prototypes, government interoperability frameworks, and real-world web management applications.
          </p>
        </div>

        {/* =========================================================================
            FEATURED PROJECTS SECTION (FusionGrid & EduLingo Rural Connect)
           ========================================================================= */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Flagship Innovations
              </h3>
              <p className="text-xs text-slate-400">
                High-priority demonstration prototypes & digital inclusion initiatives
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-3xl bg-slate-900/75 border border-slate-800/90 hover:border-indigo-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 glow-card shadow-2xl relative"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                    {/* Primary Badge */}
                    <span className="px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-indigo-400/50 text-[11px] font-bold text-cyan-300 shadow-md flex items-center gap-1.5 pointer-events-auto">
                      {project.id === 'fusiongrid' ? (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                          <span>SIH 2026 — Problem Statement 129</span>
                        </>
                      ) : (
                        <>
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Rural Education & Digital Inclusion</span>
                        </>
                      )}
                    </span>

                    {/* Secondary Badge / Organization */}
                    {project.organization ? (
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-slate-200 shadow-md flex items-center gap-1 pointer-events-auto">
                        <Building2 className="w-3 h-3 text-indigo-400" />
                        <span>{project.organization}</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-slate-300 shadow-md pointer-events-auto">
                        9 Languages • 2G Ready
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Accurate Prototype Notice (FusionGrid) */}
                    {project.disclaimer && (
                      <div className="mb-5 p-3 rounded-xl bg-slate-950/70 border border-amber-500/30 text-amber-300/90 text-xs flex items-start gap-2.5 leading-relaxed">
                        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-amber-300">Prototype Notice: </span>
                          Demonstration framework using simulated mock APIs & demo data (non-production).
                        </div>
                      </div>
                    )}

                    {/* Verified Technology Tags */}
                    <div className="mb-6">
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        Verified Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/70 text-[11px] font-medium text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Prominent Action Buttons */}
                  <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                    {/* Prominent View Live Project Button */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 border border-indigo-400/30 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                        aria-label={`View live project for ${project.title}`}
                      >
                        <span>View Live Project</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}

                    {/* View Details Modal Trigger */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/80 border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      aria-label={`View detailed architecture for ${project.title}`}
                    >
                      <Eye className="w-4 h-4 text-cyan-400" />
                      <span>Details</span>
                    </button>

                    {/* GitHub Link if Available */}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all"
                        aria-label={`View GitHub repository for ${project.title}`}
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            OTHER PROJECTS SECTION (Virasat India, Her Shield, CareerPath, etc.)
           ========================================================================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 pt-10 border-t border-slate-800/80">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-semibold mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Static Web Showcases & Software Applications</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Other <span className="text-gradient">Projects</span>
            </h3>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed">
              Cultural heritage platforms, women safety awareness initiatives, career guidance portals, and management systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-sm overflow-hidden transition-all duration-300 glow-card"
              >
                {/* Project Image Preview Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-cyan-300 pointer-events-auto">
                      {project.badge || project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase block mb-1.5">
                      {project.category}
                    </span>

                    <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5 leading-snug">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-6">
                      <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action: Live Website / Details Button */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2.5">
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/20 border border-indigo-400/30 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                          aria-label={`View live website for ${project.title}`}
                        >
                          <span>View Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>

                        <button
                          onClick={() => onSelectProject(project)}
                          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                          aria-label={`View details for ${project.title}`}
                          title="View Details"
                        >
                          <Eye className="w-4 h-4 text-cyan-400" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 border border-slate-700 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-cyan-400 group-hover:text-white" />
                        <span>View Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}

                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                        aria-label={`View GitHub repository for ${project.title}`}
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
