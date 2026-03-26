import React from 'react';
import { MapPin, Calendar, Briefcase, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container animate-fade-in">
        <div className="text-center space-y-8">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center text-4xl font-bold text-gray-700 dark:text-gray-300 shadow-lg">
                ZY
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="badge">
              <MapPin className="w-3 h-3 mr-1" />
              {t.hero.location}
            </div>
            <div className="badge">
              <Briefcase className="w-3 h-3 mr-1" />
              {t.hero.company}
            </div>
            <div className="badge bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700">
              <Calendar className="w-3 h-3 mr-1" />
              {t.hero.availability}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
            <div className="text-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{t.hero.yearsExperience}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t.about.highlights.experience}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{t.hero.experienceDesc}</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{t.hero.usersImpacted}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t.about.highlights.users}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{t.hero.usersDesc}</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{t.hero.efficiencyBoost}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t.about.highlights.efficiency}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{t.hero.efficiencyDesc}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button onClick={scrollToWork} className="btn-primary group">
              {t.hero.viewWork}
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              {t.hero.getInTouch}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;