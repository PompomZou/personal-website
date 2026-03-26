import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects, Project } from '../../data/projects';

const RecentWork: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { t } = useLanguage();

  const projectsWithTranslations = projects.map(project => ({
    ...project,
    title: (t as any)[project.titleKey.split('.').slice(1).join('.')],
    industry: (t as any)[project.industryKey.split('.').slice(1).join('.')],
    description: (t as any)[project.descriptionKey.split('.').slice(1).join('.')]
  }));

  return (
    <section className="section-container bg-white dark:bg-gray-800">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.work.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.work.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsWithTranslations.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 card-hover animate-slide-up relative ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {t.work.featured}
                  </span>
                </div>
              )}

              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid grid-cols-3 gap-2 text-white text-xs">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {project.metrics.users}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {project.metrics.impact}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {project.metrics.timeline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge">{project.industry}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Core Results Highlight */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {project.metrics.users}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">用户规模</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {project.metrics.impact}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">核心成果</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {project.metrics.timeline}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">项目周期</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary group">
            {t.work.viewAll}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;