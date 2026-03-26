import React from 'react';
import { Mail, MessageCircle, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-container">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{t.contact.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => navigator.clipboard.writeText('zouyujia16@outlook.com')}
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 card-hover text-center space-y-4 cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
              <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">{t.contact.email}</h3>
              <p className="text-sm text-gray-600">zouyujia16@outlook.com</p>
            </div>
            <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              点击复制
            </div>
          </div>

          <div
            onClick={() => navigator.clipboard.writeText('13212300408')}
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 card-hover text-center space-y-4 cursor-pointer"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-green-600 transition-colors duration-300">
              <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">{t.contact.wechat}</h3>
              <p className="text-sm text-gray-600">13212300408</p>
            </div>
            <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              点击复制
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/yujia-zou-daisy/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 card-hover text-center space-y-4"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-blue-700 transition-colors duration-300">
              <Linkedin className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">{t.contact.linkedin}</h3>
              <p className="text-sm text-gray-600">yujia-zou-daisy</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="https://github.com/PompomZou"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 card-hover text-center space-y-4"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-gray-900 transition-colors duration-300">
              <Github className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">{t.contact.github}</h3>
              <p className="text-sm text-gray-600">PompomZou</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            {t.contact.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;