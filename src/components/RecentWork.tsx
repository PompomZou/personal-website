import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'LazCortex AI Operations',
    industry: 'E-commerce',
    description: 'AI-powered operations workbench for Lazada, streamlining seller management and automated decision-making processes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['AI/ML', 'Operations', 'Dashboard']
  },
  {
    id: 2,
    title: 'Creative Coding Portfolio',
    industry: 'Creative Tech',
    description: 'Interactive WebGL experiences using Three.js, showcasing the intersection of technology and art.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
    tags: ['Three.js', 'WebGL', 'Creative']
  },
  {
    id: 3,
    title: 'E-commerce Optimization Suite',
    industry: 'Retail',
    description: 'Comprehensive analytics and optimization tools for improving conversion rates and user experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Analytics', 'UX', 'Conversion']
  },
  {
    id: 4,
    title: 'AI Agent Framework',
    industry: 'Technology',
    description: 'Modular framework for building and deploying AI agents across various business applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['AI Agents', 'Framework', 'Automation']
  }
];

const RecentWork: React.FC = () => {
  return (
    <section className="section-container">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Recent Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in product management, 
            AI operations, and creative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover animate-slide-up"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge">{project.industry}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
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