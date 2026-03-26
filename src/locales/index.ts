// 翻译系统主入口文件
// 这个文件汇总所有语言的翻译内容，并提供统一的接口

import { en } from './en';
import { zh } from './zh';

// 定义翻译接口类型（保持与原来一致）
export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    education: string;
    work: string;
    experience: string;
    services: string;
    contact: string;
    resume: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    location: string;
    company: string;
    availability: string;
    yearsExperience: string;
    usersImpacted: string;
    efficiencyBoost: string;
    experienceDesc: string;
    usersDesc: string;
    efficiencyDesc: string;
    viewWork: string;
    getInTouch: string;
  };
  
  // About Section
  about: {
    title: string;
    description: string;
    whatSetsApart: string;
    aiMindset: string;
    aiMindsetDesc: string;
    creativeTech: string;
    creativeTechDesc: string;
    crossCultural: string;
    crossCulturalDesc: string;
    dataDriver: string;
    dataDriverDesc: string;
    collaborate: string;
    highlights: {
      experience: string;
      experienceDesc: string;
      users: string;
      usersDesc: string;
      efficiency: string;
      efficiencyDesc: string;
      conversion: string;
      conversionDesc: string;
    };
  };
  
  // Work Section
  work: {
    title: string;
    description: string;
    featured: string;
    viewAll: string;
    projects: {
      lazcortex: {
        title: string;
        industry: string;
        description: string;
        users: string;
        impact: string;
        timeline: string;
      };
      creative: {
        title: string;
        industry: string;
        description: string;
        users: string;
        impact: string;
        timeline: string;
      };
      optimization: {
        title: string;
        industry: string;
        description: string;
        users: string;
        impact: string;
        timeline: string;
      };
      framework: {
        title: string;
        industry: string;
        description: string;
        users: string;
        impact: string;
        timeline: string;
      };
    };
  };
  
  // Experience Section
  experience: {
    title: string;
    description: string;
    positions: {
      lazada: {
        position: string;
        company: string;
        period: string;
        location: string;
        achievements: string[];
      };
      alibaba: {
        position: string;
        company: string;
        period: string;
        location: string;
        achievements: string[];
      };
      chaoyue: {
        position: string;
        company: string;
        period: string;
        location: string;
        achievements: string[];
      };
      bytedance: {
        position: string;
        company: string;
        period: string;
        location: string;
        achievements: string[];
      };
    };
  };
  
  // Services Section
  services: {
    title: string;
    description: string;
    techStack: string;
    techStackDesc: string;
    items: {
      aiOperations: {
        title: string;
        description: string;
      };
      productGrowth: {
        title: string;
        description: string;
      };
      creativeCoding: {
        title: string;
        description: string;
      };
      processOptimization: {
        title: string;
        description: string;
      };
    };
  };
  
  // Testimonials Section
  testimonials: {
    title: string;
    description: string;
    readyTitle: string;
    readyDesc: string;
    startConversation: string;
    items: {
      sarah: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
      michael: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
      lisa: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    description: string;
    email: string;
    wechat: string;
    linkedin: string;
    github: string;
    footer: string;
  };
  
  // Benefits Section
  benefits: {
    title: string;
    description: string;
    readyTitle: string;
    readyDesc: string;
    startProject: string;
    scheduleCall: string;
    items: {
      conversion: {
        title: string;
        description: string;
      };
      aiDriven: {
        title: string;
        description: string;
      };
      crossFunctional: {
        title: string;
        description: string;
      };
      rapidExecution: {
        title: string;
        description: string;
      };
      riskMitigation: {
        title: string;
        description: string;
      };
      scalable: {
        title: string;
        description: string;
      };
    };
  };

  // Education Section
  education: {
    title: string;
    description: string;
    highlights: string;
    achievements: string;
    positions: {
      tsinghua: {
        school: string;
        degree: string;
        period: string;
        location: string;
        highlights: string;
        gpa: string;
        achievements: string[];
      };
      ruc: {
        school: string;
        degree: string;
        period: string;
        location: string;
        highlights: string;
        gpa: string;
        achievements: string[];
      };
      ucla: {
        school: string;
        degree: string;
        period: string;
        location: string;
        highlights: string;
        gpa: string;
        achievements: string[];
      };
    };
  };

  // Honors Section
  honors: {
    title: string;
    description: string;
    summary: string;
    categories: {
      national: {
        title: string;
        count: string;
        items: string[];
      };
      academic: {
        title: string;
        count: string;
        items: string[];
      };
      recognition: {
        title: string;
        count: string;
        items: string[];
      };
    };
  };

  // Product Philosophy Section
  philosophy: {
    title: string;
    description: string;
    items: {
      dataFirst: {
        title: string;
        description: string;
      };
      userCentric: {
        title: string;
        description: string;
      };
      iterative: {
        title: string;
        description: string;
      };
    };
  };
}

// 导出翻译对象
export const translations: Record<'en' | 'zh', Translation> = {
  en,
  zh
};

// 为了保持向后兼容，也导出原来的接口
export { Translation as TranslationType };