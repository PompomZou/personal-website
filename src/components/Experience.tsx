import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Lazada (Alibaba International)',
    position: 'Senior Product Manager',
    period: '2022 - Present',
    location: 'Hangzhou, China',
    achievements: [
      'Led development of LazCortex AI Operations Workbench, improving operational efficiency by 40%',
      'Managed cross-functional teams of 15+ engineers and designers',
      'Implemented AI-driven seller management systems serving 100K+ merchants',
      'Drove product strategy for Southeast Asian e-commerce operations'
    ]
  },
  {
    id: 2,
    company: 'Alibaba Group',
    position: 'Product Manager',
    period: '2020 - 2022',
    location: 'Hangzhou, China',
    achievements: [
      'Designed and launched merchant onboarding platform with 95% completion rate',
      'Collaborated with data science teams to build predictive analytics tools',
      'Optimized user experience flows resulting in 25% increase in conversion',
      'Mentored junior product managers and established PM best practices'
    ]
  },
  {
    id: 3,
    company: 'Tech Startup',
    position: 'Associate Product Manager',
    period: '2019 - 2020',
    location: 'Shanghai, China',
    achievements: [
      'Built MVP for B2B SaaS platform from concept to launch',
      'Conducted user research and competitive analysis for market positioning',
      'Worked closely with engineering teams using agile methodologies',
      'Achieved product-market fit with 80% user retention rate'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section className="section-container bg-white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey in product management and technology, building impactful solutions 
            for millions of users across Asia-Pacific.
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