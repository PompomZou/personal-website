import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Award,
      number: t.hero.yearsExperience,
      label: t.about.highlights.experience,
      description: t.about.highlights.experienceDesc
    },
    {
      icon: Users,
      number: t.hero.usersImpacted,
      label: t.about.highlights.users,
      description: t.about.highlights.usersDesc
    },
    {
      icon: Target,
      number: t.hero.efficiencyBoost,
      label: t.about.highlights.efficiency,
      description: t.about.highlights.efficiencyDesc
    },
    {
      icon: TrendingUp,
      number: '25%',
      label: t.about.highlights.conversion,
      description: t.about.highlights.conversionDesc
    }
  ];

  return (
    <section className="section-container bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              我是Lazada的电商产品经理，专注跨境电商用户增长与AI产品落地。清华苏世民学者，具备"C端增长运营 + B端AI产品 + 跨国协同"的复合能力，驱动东南亚6国业务增长。
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t.about.whatSetsApart}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>{t.about.aiMindset}</strong> {t.about.aiMindsetDesc}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>{t.about.creativeTech}</strong> {t.about.creativeTechDesc}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>{t.about.crossCultural}</strong> {t.about.crossCulturalDesc}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>{t.about.dataDriver}</strong> {t.about.dataDriverDesc}
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button className="btn-primary">
                {t.about.collaborate}
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