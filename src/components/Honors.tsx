import React from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Honors: React.FC = () => {
  const { t } = useLanguage();

  const honorCategories = [
    {
      icon: Trophy,
      title: t.honors.categories.national.title,
      count: t.honors.categories.national.count,
      items: t.honors.categories.national.items,
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: Medal,
      title: t.honors.categories.academic.title,
      count: t.honors.categories.academic.count,
      items: t.honors.categories.academic.items,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Star,
      title: t.honors.categories.recognition.title,
      count: t.honors.categories.recognition.count,
      items: t.honors.categories.recognition.items,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    }
  ];

  return (
    <section className="section-container bg-white dark:bg-gray-900">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.honors.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.honors.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {honorCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`${category.bgColor} rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${category.bgColor} border-2 border-current ${category.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {category.title}
                  </h3>
                  <p className={`text-2xl font-bold ${category.color}`}>
                    {category.count}
                  </p>
                </div>

                <div className="space-y-2">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center"
                    >
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                        <Award className="w-3 h-3 mr-1" />
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full border border-purple-200 dark:border-purple-700">
            <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              {t.honors.summary}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Honors;