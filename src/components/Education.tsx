import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const educationData = [
    {
      school: t.education.positions.tsinghua.school,
      degree: t.education.positions.tsinghua.degree,
      period: t.education.positions.tsinghua.period,
      location: t.education.positions.tsinghua.location,
      highlights: t.education.positions.tsinghua.highlights,
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Tsinghua_University_Logo.svg/200px-Tsinghua_University_Logo.svg.png',
      featured: true
    },
    {
      school: t.education.positions.ruc.school,
      degree: t.education.positions.ruc.degree,
      period: t.education.positions.ruc.period,
      location: t.education.positions.ruc.location,
      highlights: t.education.positions.ruc.highlights,
      logo: 'https://upload.wikimedia.org/wikipedia/zh/thumb/8/86/Renmin_University_of_China_logo.svg/200px-Renmin_University_of_China_logo.svg.png',
      featured: false
    },
    {
      school: t.education.positions.ucla.school,
      degree: t.education.positions.ucla.degree,
      period: t.education.positions.ucla.period,
      location: t.education.positions.ucla.location,
      highlights: t.education.positions.ucla.highlights,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/200px-The_University_of_California_UCLA.svg.png',
      featured: false
    }
  ];

  return (
    <section className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.education.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.education.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.school}
              className={`bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 card-hover animate-slide-up relative ${
                edu.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {edu.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    重点院校
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                      {edu.school}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                </div>

                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <Award className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;