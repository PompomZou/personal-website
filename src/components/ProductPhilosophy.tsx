import React from 'react';
import { Brain, Target, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductPhilosophy: React.FC = () => {
  const { t } = useLanguage();

  const philosophies = [
    {
      icon: Brain,
      title: t.philosophy.items.dataFirst.title,
      description: t.philosophy.items.dataFirst.description
    },
    {
      icon: Target,
      title: t.philosophy.items.userCentric.title,
      description: t.philosophy.items.userCentric.description
    },
    {
      icon: Users,
      title: t.philosophy.items.crossFunctional.title,
      description: t.philosophy.items.crossFunctional.description
    }
  ];

  return (
    <section className="section-container bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{t.philosophy.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t.philosophy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 text-center space-y-4 border border-gray-100 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                <item.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPhilosophy;