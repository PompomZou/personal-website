import React from 'react';
import { Target, Lightbulb, Users, Rocket, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Target,
      title: t.benefits.items.conversion.title,
      description: t.benefits.items.conversion.description
    },
    {
      icon: Lightbulb,
      title: t.benefits.items.aiDriven.title,
      description: t.benefits.items.aiDriven.description
    },
    {
      icon: Users,
      title: t.benefits.items.crossFunctional.title,
      description: t.benefits.items.crossFunctional.description
    },
    {
      icon: Rocket,
      title: t.benefits.items.rapidExecution.title,
      description: t.benefits.items.rapidExecution.description
    },
    {
      icon: Shield,
      title: t.benefits.items.riskMitigation.title,
      description: t.benefits.items.riskMitigation.description
    },
    {
      icon: TrendingUp,
      title: t.benefits.items.scalable.title,
      description: t.benefits.items.scalable.description
    }
  ];

  return (
    <section className="section-container bg-white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{t.benefits.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.benefits.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {t.benefits.readyTitle}
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t.benefits.readyDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                {t.benefits.startProject}
              </button>
              <button className="btn-secondary">
                {t.benefits.scheduleCall}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;