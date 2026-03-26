import React from 'react';
import { Award, Trophy, Star, Medal, Crown, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Honors: React.FC = () => {
  const { t } = useLanguage();

  const honorCategories = [
    {
      category: t.honors.categories.national,
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      items: t.honors.items.national
    },
    {
      category: t.honors.categories.academic,
      icon: Trophy,
      color: 'from-blue-500 to-blue-600',
      items: t.honors.items.academic
    },
    {
      category: t.honors.categories.professional,
      icon: Star,
      color: 'from-green-500 to-green-600',
      items: t.honors.items.professional
    },
    {
      category: t.honors.categories.leadership,
      icon: Target,
      color: 'from-orange-500 to-orange-600',
      items: t.honors.items.leadership
    }
  ];

  return (
    <section className="section-container bg-white dark:bg-gray-800">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.honors.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.honors.description}
          </p>
        </div>

        <div className="space-y-8">
          {honorCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-600"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.items.map((honor, index) => (
                  <div
                    key={honor}
                    className="group bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-lg p-3 transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-start space-x-2">
                      <Medal className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {honor}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
          <div className="flex items-center justify-center space-x-4">
            <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                {t.honors.totalCount}
              </div>
              <div className="text-sm text-purple-700 dark:text-purple-300">
                {t.honors.totalLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Honors;