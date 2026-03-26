import React from 'react';
import { Brain, Code, BarChart3, Zap } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Operations',
    description: 'Design and implement AI-powered operational systems that scale business processes and improve efficiency.'
  },
  {
    icon: BarChart3,
    title: 'Product Growth',
    description: 'Data-driven product strategies that optimize user experience and drive sustainable business growth.'
  },
  {
    icon: Code,
    title: 'Creative Coding',
    description: 'Interactive experiences using Three.js, WebGL, and modern web technologies for engaging user interfaces.'
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Streamline workflows and automate repetitive tasks to maximize team productivity and output quality.'
  }
];

const techStack = [
  'Three.js', 'React', 'TypeScript', 'Python', 'SQL', 'Figma', 
  'Cursor', 'VS Code', 'Notion', 'Slack', 'Jira', 'Analytics',
  'Machine Learning', 'WebGL', 'Node.js', 'PostgreSQL'
];

const Services: React.FC = () => {
  return (
    <section className="section-container">
      <div className="space-y-16">
        {/* What I Do */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">What I Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining product management expertise with creative technology 
              to build innovative solutions that drive business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Tech Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex animate-marquee space-x-8">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="flex-shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;