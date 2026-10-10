import React, { useEffect } from 'react';
import {
  X,
  CheckCircle,
  ExternalLink,
  AlertCircle,
  Sparkles,
  Info,
  Building2,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-xs font-semibold text-cyan-300">
              {project.badge || project.category}
            </span>
            {project.organization && (
              <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>{project.organization}</span>
              </span>
            )}
          </div>
        </div>

        {/* Title & Category */}
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Disclaimer / Accuracy Note (for FusionGrid & Prototypes) */}
        {project.disclaimer && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/40 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-amber-300 block mb-0.5 font-bold">
                Demonstration Prototype Notice
              </strong>
              {project.disclaimer}
            </div>
          </div>
        )}

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem Statement Section (if available) */}
        {project.problemStatement && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-300 mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>Problem Statement</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        {/* Solution Section (if available) */}
        {project.solution && (
          <div className="mb-6 p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Solution & Interoperability Framework</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        )}

        {/* Overview Description */}
        <div className="space-y-3 mb-8">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
            Architecture & Functional Overview
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Features Breakdown */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">
            Key Features Implemented
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Prominent View Live Project Button */}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Project</span>
              </a>
            )}

            {/* GitHub Repository Button */}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
