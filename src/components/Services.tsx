import React from 'react';
import { Brain, Code, BarChart3, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


const techCategories = [
  {
    title: '产品工具',
    tools: ['Figma', 'Axure', 'Sketch', 'Notion', 'Miro']
  },
  {
    title: '数据分析',
    tools: ['SQL', 'Python', 'SPSS', 'Tableau', 'Excel']
  },
  {
    title: 'AI工具',
    tools: ['ChatGPT', 'Claude', 'Midjourney', 'Cursor', 'GitHub Copilot']
  },
  {
    title: '协作工具',
    tools: ['Slack', 'DingTalk', 'Jira', 'Confluence', 'Lark']
  }
];

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      title: t.services.items.aiOperations.title,
      description: t.services.items.aiOperations.description
    },
    {
      icon: BarChart3,
      title: t.services.items.productGrowth.title,
      description: t.services.items.productGrowth.description
    },
    {
      icon: Code,
      title: t.services.items.creativeCoding.title,
      description: t.services.items.creativeCoding.description
    },
    {
      icon: Zap,
      title: t.services.items.processOptimization.title,
      description: t.services.items.processOptimization.description
    }
  ];

  return (
    <section className="section-container">
      <div className="space-y-16">
        {/* What I Do */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{t.services.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.services.description}
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.services.techStack}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.services.techStackDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-4 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 text-center">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.tools.map((tool) => (
                    <div
                      key={tool}
                      className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 text-center"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;