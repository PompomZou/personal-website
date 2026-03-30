import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { translations, Translation } from '../utils/translations';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const detectBrowserLanguage = (): Language => {
  try {
    const nav = window.navigator.language || (window.navigator as any).userLanguage || 'en';
    return nav.startsWith('zh') ? 'zh' : 'en';
  } catch (e) {
    return 'en';
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language | null;
      if (saved === 'en' || saved === 'zh') return saved;
      return detectBrowserLanguage();
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      // ignore
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const value = useMemo(() => ({ language, setLanguage: handleSetLanguage, t: translations[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};