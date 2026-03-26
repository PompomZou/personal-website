import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      company: t.experience.positions.lazada.company,
      position: t.experience.positions.lazada.position,
      period: t.experience.positions.lazada.period,
      location: t.experience.positions.lazada.location,
      achievements: t.experience.positions.lazada.achievements
    },
    {
      id: 2,
      company: t.experience.positions.alibaba.company,
      position: t.experience.positions.alibaba.position,
      period: t.experience.positions.alibaba.period,
      location: t.experience.positions.alibaba.location,
      achievements: t.experience.positions.alibaba.achievements
    },
    {
      id: 3,
      company: t.experience.positions.startup.company,
      position: t.experience.positions.startup.position,
      period: t.experience.positions.startup.period,
      location: t.experience.positions.startup.location,
      achievements: t.experience.positions.startup.achievements
    }
  ];

  return (
    <section className="section-container bg-white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{t.experience.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.experience.description}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-8 w-0.5 h-full bg-gray-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-gray-900 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 ml-4 border border-gray-100 dark:border-gray-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;