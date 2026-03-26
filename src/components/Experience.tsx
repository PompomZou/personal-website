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
      logo: t.experience.positions.lazada.logo,
      achievements: t.experience.positions.lazada.achievements
    },
    {
      id: 2,
      company: t.experience.positions.startup.company,
      position: t.experience.positions.startup.position,
      period: t.experience.positions.startup.period,
      location: t.experience.positions.startup.location,
      logo: t.experience.positions.startup.logo,
      achievements: t.experience.positions.startup.achievements
    },
    {
      id: 3,
      company: t.experience.positions.alibaba.company,
      position: t.experience.positions.alibaba.position,
      period: t.experience.positions.alibaba.period,
      location: t.experience.positions.alibaba.location,
      logo: t.experience.positions.alibaba.logo,
      achievements: t.experience.positions.alibaba.achievements
    },
    {
      id: 4,
      company: t.experience.positions.bytedance.company,
      position: t.experience.positions.bytedance.position,
      period: t.experience.positions.bytedance.period,
      location: t.experience.positions.bytedance.location,
      logo: t.experience.positions.bytedance.logo,
      achievements: t.experience.positions.bytedance.achievements
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
                <div className="absolute left-3 top-8 w-0.5 h-full bg-purple-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white rounded-xl p-6 ml-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-16 h-16 rounded-lg object-contain bg-white p-2 border border-gray-200 shadow-sm"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Position and Company Info */}
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                        {exp.company}
                      </p>

                      {/* Period and Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 mt-3">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
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