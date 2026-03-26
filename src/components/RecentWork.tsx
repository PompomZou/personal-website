import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'LazCortex AI Operations',
    industry: 'E-commerce',
    description: 'AI-powered operations workbench for Lazada, streamlining seller management and automated decision-making processes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['AI/ML', 'Operations', 'Dashboard'],
    metrics: {
      users: '100K+ merchants',
      impact: '40% efficiency gain',
      timeline: '18 months'
    },
    featured: true
  },
  {
    id: 2,
    title: 'Creative Coding Portfolio',
    industry: 'Creative Tech',
    description: 'Interactive WebGL experiences using Three.js, showcasing the intersection of technology and art.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
    tags: ['Three.js', 'WebGL', 'Creative'],
    metrics: {
      users: '10K+ visitors',
      impact: '95% engagement',
      timeline: '6 months'
    },
    featured: false
  },
  {
    id: 3,
    title: 'E-commerce Optimization Suite',
    industry: 'Retail',
    description: 'Comprehensive analytics and optimization tools for improving conversion rates and user experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Analytics', 'UX', 'Conversion'],
    metrics: {
      users: '50K+ sellers',
      impact: '25% conversion boost',
      timeline: '12 months'
    },
    featured: true
  },
  {
    id: 4,
    title: 'AI Agent Framework',
    industry: 'Technology',
    description: 'Modular framework for building and deploying AI agents across various business applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['AI Agents', 'Framework', 'Automation'],
    metrics: {
      users: '15+ teams',
      impact: '60% dev time saved',
      timeline: '9 months'
    },
    featured: false
  }
];

const RecentWork: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="section-container bg-white dark:bg-gray-800">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Work</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of impactful projects that demonstrate my expertise in AI operations,
            product strategy, and creative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
                    Featured
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
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;