import React from 'react';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductPhilosophy: React.FC = () => {
  const { t } = useLanguage();

  const philosophies = [
    {
      icon: Lightbulb,
      title: t.philosophy.items.dataFirst.title,
      description: t.philosophy.items.dataFirst.description,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Target,
      title: t.philosophy.items.userCentric.title,
      description: t.philosophy.items.userCentric.description,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: TrendingUp,
      title: t.philosophy.items.iterative.title,
      description: t.philosophy.items.iterative.description,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.philosophy.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.philosophy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`${item.bgColor} rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slide-up h-full`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full ${item.bgColor} border-2 border-current ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className={`text-xl font-bold ${item.color}`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductPhilosophy;