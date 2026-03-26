import React from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const educations = [
    {
      id: 1,
      school: t.education.positions.tsinghua.school,
      degree: t.education.positions.tsinghua.degree,
      period: t.education.positions.tsinghua.period,
      location: t.education.positions.tsinghua.location,
      logo: 'https://upload.wikimedia.org/wikipedia/zh/thumb/8/88/Tsinghua_University_Logo.svg/200px-Tsinghua_University_Logo.svg.png',
      highlights: t.education.positions.tsinghua.highlights
    },
    {
      id: 2,
      school: t.education.positions.ruc.school,
      degree: t.education.positions.ruc.degree,
      period: t.education.positions.ruc.period,
      location: t.education.positions.ruc.location,
      logo: 'https://upload.wikimedia.org/wikipedia/zh/thumb/1/14/Renmin_University_of_China_logo.svg/200px-Renmin_University_of_China_logo.svg.png',
      highlights: t.education.positions.ruc.highlights
    },
    {
      id: 3,
      school: t.education.positions.ucla.school,
      degree: t.education.positions.ucla.degree,
      period: t.education.positions.ucla.period,
      location: t.education.positions.ucla.location,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/200px-The_University_of_California_UCLA.svg.png',
      highlights: t.education.positions.ucla.highlights
    }
  ];

  return (
    <section className="section-container bg-gray-50">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{t.education.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.education.description}
          </p>
        </div>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <div
              key={edu.id}
              className="relative pl-8 pb-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline line */}
              {index < educations.length - 1 && (
                <div className="absolute left-3 top-8 w-0.5 h-full bg-purple-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <GraduationCap className="w-3 h-3 text-white" />
              </div>

              <div className="bg-white rounded-xl p-6 ml-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* School Logo */}
                    <div className="flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="w-16 h-16 rounded-lg object-contain bg-white p-2 border border-gray-200 shadow-sm"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Degree and School Info */}
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-medium text-purple-600">
                        {edu.school}
                      </p>

                      {/* Period and Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <Award className="w-4 h-4 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{highlight}</span>
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