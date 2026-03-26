import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  const philosophies = [
    {
      icon: Brain,
      title: t.philosophy.items.dataFirst.title,
      description: t.philosophy.items.dataFirst.description,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Target,
      title: t.philosophy.items.userCentric.title,
      description: t.philosophy.items.userCentric.description,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: TrendingUp,
      title: t.philosophy.items.iterative.title,
      description: t.philosophy.items.iterative.description,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    }
  ];

  return (
    <section className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.philosophy.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.philosophy.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {philosophies.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`${item.bgColor} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <IconComponent className={`w-12 h-12 ${item.color} mx-auto`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;