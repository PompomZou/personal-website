import React from 'react';
import { Calendar, MapPin, Award, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const educations = [
    {
      id: 1,
      school: t.education.positions.tsinghua.school,
      degree: t.education.positions.tsinghua.degree,
      period: t.education.positions.tsinghua.period,
      location: t.education.positions.tsinghua.location,
      highlights: t.education.positions.tsinghua.highlights,
      gpa: t.education.positions.tsinghua.gpa,
      achievements: t.education.positions.tsinghua.achievements
    },
    {
      id: 2,
      school: t.education.positions.ruc.school,
      degree: t.education.positions.ruc.degree,
      period: t.education.positions.ruc.period,
      location: t.education.positions.ruc.location,
      highlights: t.education.positions.ruc.highlights,
      gpa: t.education.positions.ruc.gpa,
      achievements: t.education.positions.ruc.achievements
    },
    {
      id: 3,
      school: t.education.positions.ucla.school,
      degree: t.education.positions.ucla.degree,
      period: t.education.positions.ucla.period,
      location: t.education.positions.ucla.location,
      highlights: t.education.positions.ucla.highlights,
      gpa: t.education.positions.ucla.gpa,
      achievements: t.education.positions.ucla.achievements
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

        <div className="grid gap-8 md:gap-6">
          {educations.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.school}
                  </h3>
                  <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                    {edu.degree}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {edu.gpa}
                    </p>
                  )}
                </div>
                <div className="flex flex-col lg:items-end space-y-1 mt-3 lg:mt-0">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                </div>
              </div>

              {edu.highlights && (
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t.education.highlights}
                    </span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300 font-medium bg-purple-50 dark:bg-purple-900/20 px-3 py-2 rounded-lg">
                    {edu.highlights}
                  </p>
                </div>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <div className="flex items-center mb-3">
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t.education.achievements}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement: string, idx: number) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;