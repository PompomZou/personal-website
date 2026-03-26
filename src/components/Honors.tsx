import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Honors: React.FC = () => {
  const { t } = useLanguage();

  const honorCategories = [
    {
      icon: Trophy,
      title: t.honors.categories.national.title,
      count: t.honors.categories.national.count,
      items: t.honors.categories.national.items,
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    },
    {
      icon: Award,
      title: t.honors.categories.academic.title,
      count: t.honors.categories.academic.count,
      items: t.honors.categories.academic.items,
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    {
      icon: Star,
      title: t.honors.categories.recognition.title,
      count: t.honors.categories.recognition.count,
      items: t.honors.categories.recognition.items,
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    }
  ];

  return (
    <section className="section-container bg-white">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{t.honors.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.honors.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {honorCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-xl p-6 space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${category.color}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;