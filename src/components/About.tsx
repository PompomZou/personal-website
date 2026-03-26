import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      number: '5+',
      label: 'Years Experience',
      description: 'Product Management & AI Operations'
    },
    {
      icon: Users,
      number: '100K+',
      label: 'Users Impacted',
      description: 'Across Southeast Asia'
    },
    {
      icon: Target,
      number: '40%',
      label: 'Efficiency Gain',
      description: 'Through AI Implementation'
    },
    {
      icon: TrendingUp,
      number: '25%',
      label: 'Conversion Boost',
      description: 'UX Optimization Results'
    }
  ];

  return (
    <section className="section-container bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Bridging AI Innovation with Business Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Product Manager at Lazada (Alibaba International) with a passion for 
              transforming complex business challenges into elegant, AI-powered solutions. 
              My unique blend of technical creativity and strategic thinking drives 
              measurable results across e-commerce operations.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What Sets Me Apart
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>AI-First Mindset:</strong> Leading development of LazCortex, 
                    an AI operations workbench serving 100K+ merchants
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Creative Technologist:</strong> Exploring Three.js and WebGL 
                    to create immersive user experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Cross-Cultural Leader:</strong> Managing diverse teams across 
                    China and Southeast Asia markets
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Data-Driven Decision Maker:</strong> Every product decision 
                    backed by user research and analytics
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button className="btn-primary">
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center mx-auto">
                <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.number}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;