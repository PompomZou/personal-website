export interface TranslationInterface {
  nav: {
    home: string;
    about: string;
    work: string;
    education: string;
    honors: string;
    experience: string;
    services: string;
    contact: string;
    resume: string;
  };
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
  about: {
    title: string;
    description: string;
    skills: string[];
    highlights: {
      title: string;
      description: string;
    }[];
  };
  work: {
    title: string;
    description: string;
    projects: {
      title: string;
      description: string;
      tech: string[];
      metrics: string[];
    }[];
  };
  education: {
    title: string;
    description: string;
    positions: {
      tsinghua: {
        school: string;
        degree: string;
        period: string;
        location: string;
        highlights: string[];
      };
      ruc: {
        school: string;
        degree: string;
        period: string;
        location: string;
        highlights: string[];
      };
      ucla: {
        school: string;
        degree: string;
        period: string;
        location: string;
        highlights: string[];
      };
    };
  };
  honors: {
    title: string;
    description: string;
    totalCount: string;
    totalLabel: string;
    categories: {
      national: string;
      academic: string;
      professional: string;
      leadership: string;
    };
    items: {
      national: string[];
      academic: string[];
      professional: string[];
      leadership: string[];
    };
  };
  experience: {
    title: string;
    description: string;
    positions: {
      title: string;
      company: string;
      period: string;
      location: string;
      achievements: string[];
    }[];
  };
  services: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    wechat: string;
    linkedin: string;
    github: string;
    footer: string;
  };
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
}

const translations: { en: TranslationInterface; zh: TranslationInterface } = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      education: 'Education',
      honors: 'Honors',
      experience: 'Experience',
      services: 'Services',
      contact: 'Contact',
      resume: 'Resume'
    },
    hero: {
      title: 'Yujia Zou / Daisy',
      subtitle: 'Cross-border E-commerce PM | Schwarzman Scholar',
      description: 'Focused on cross-border e-commerce user growth and AI product implementation, driving business growth across 6 Southeast Asian countries',
      location: 'Hangzhou, China',
      company: 'Lazada (Alibaba International)',
      availability: 'Open to new opportunities',
      yearsExperience: '2+',
      usersImpacted: '1.1M+',
      efficiencyBoost: '37%',
      experienceDesc: 'Product & Operations Experience',
      usersDesc: 'Channel DAU (6 SEA Countries)',
      efficiencyDesc: 'Channel DAU Growth Rate',
      viewWork: 'View Work',
      getInTouch: 'Get in Touch'
    },
    about: {
      title: 'About Me',
      description: 'Cross-border e-commerce product manager with deep expertise in user growth, AI product implementation, and data-driven operations.',
      skills: ['Product Management', 'User Growth', 'AI Products', 'Data Analysis', 'Cross-functional Leadership'],
      highlights: [
        {
          title: 'Data-Driven Growth',
          description: 'Achieved 37% DAU growth through systematic user acquisition and retention strategies.'
        },
        {
          title: 'AI Product Innovation',
          description: 'Led AI-powered product initiatives that transformed user experience and operational efficiency.'
        }
      ]
    },
    work: {
      title: 'Featured Work',
      description: 'Selected projects showcasing my expertise in product management and user growth.',
      projects: [
        {
          title: 'Lazmall Channel Growth',
          description: 'Led user acquisition and retention for Lazmall across 6 Southeast Asian countries',
          tech: ['Product Strategy', 'User Growth', 'Data Analytics', 'A/B Testing'],
          metrics: ['37% DAU Growth', '1.1M+ Users', '6 Countries']
        }
      ]
    },
    education: {
      title: 'Education',
      description: 'Academic background in management, journalism, and business from top institutions in China and the US.',
      positions: {
        tsinghua: {
          school: 'Tsinghua University Schwarzman College',
          degree: 'Master of Management',
          period: '2024.08 - 2025.06',
          location: 'Beijing',
          highlights: [
            'Full scholarship (3% acceptance rate, 140/4000+ applicants)',
            'Focus on global management and leadership',
            'Cross-cultural team collaboration projects'
          ]
        },
        ruc: {
          school: 'Renmin University of China',
          degree: 'International Journalism & English Double Degree',
          period: '2020.09 - 2024.06',
          location: 'Beijing',
          highlights: [
            'Outstanding graduate with double degree',
            'Excellent student in School of Journalism',
            'English Proficiency Test Level 8 Certificate'
          ]
        },
        ucla: {
          school: 'University of California, Los Angeles',
          degree: 'Business Exchange Program',
          period: '2023.01 - 2023.06',
          location: 'Los Angeles',
          highlights: [
            'Anderson School of Management exchange student',
            'Cross-cultural business case analysis',
            'International marketing projects'
          ]
        }
      }
    },
    honors: {
      title: 'Honors & Awards',
      description: 'Recognition received in academic, professional, and leadership areas.',
      totalCount: '30+',
      totalLabel: 'Honors & Awards',
      categories: {
        national: 'National Honors',
        academic: 'Academic Awards',
        professional: 'Professional Certifications',
        leadership: 'Leadership Awards'
      },
      items: {
        national: [
          'Tsinghua Schwarzman Scholar (Full Scholarship)',
          'National Encouragement Scholarship',
          'National English Competition First Prize',
          'China Collegiate Computing Contest National Second Prize'
        ],
        academic: [
          'Outstanding Graduate of Renmin University',
          'Excellent Student of School of Journalism',
          'Top 5% Academic Performance',
          'English Proficiency Test Level 8',
          'IELTS 8.0',
          'TOEFL 110'
        ],
        professional: [
          'Google Analytics Certification',
          'Facebook Blueprint Certification',
          'New Product Development Professional (NPDP)',
          'Data Analyst Certification',
          'Scrum Master Certification'
        ],
        leadership: [
          'Student Union President',
          'Student Association Vice President',
          'Outstanding Volunteer Individual',
          'Advanced Individual in Social Practice',
          'Innovation and Entrepreneurship Competition Team Leader'
        ]
      }
    },
    experience: {
      title: 'Experience',
      description: 'Professional journey in product management and cross-border e-commerce.',
      positions: [
        {
          title: 'Product Manager',
          company: 'Lazada (Alibaba International)',
          period: '2025.06 - Present',
          location: 'Hangzhou, China',
          achievements: [
            'Led Lazmall channel user growth across 6 Southeast Asian countries',
            'Achieved 37% DAU growth through integrated acquisition strategies',
            'Managed cross-functional teams of 100+ members across multiple countries'
          ]
        }
      ]
    },
    services: {
      title: 'Services',
      description: 'Core capabilities I bring to product and business challenges.',
      items: [
        {
          title: 'Product Strategy',
          description: 'End-to-end product planning and execution with focus on user-centric design.'
        },
        {
          title: 'User Growth',
          description: 'Data-driven acquisition and retention strategies that scale across markets.'
        }
      ]
    },
    contact: {
      title: 'Get in Touch',
      description: 'Open to discussing product management, user growth, AI products, or cross-border e-commerce topics. Looking forward to connecting.',
      email: 'Email',
      wechat: 'WeChat',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      footer: '© 2026 Yujia Zou (Daisy). Schwarzman Scholar | Cross-border E-commerce PM.'
    },
    benefits: {
      title: 'Why Work With Me',
      description: 'Core value I bring to every project.',
      readyTitle: 'Ready to Collaborate?',
      readyDesc: 'Let\'s explore how to drive growth with data, reshape operations with AI, and build impactful products together.',
      startProject: 'Start Discussion',
      scheduleCall: 'Schedule Call',
      items: {
        conversion: {
          title: 'Data-Driven',
          description: 'Every product decision backed by data attribution and A/B testing validation, pursuing quantifiable business outcomes.'
        },
        aiDriven: {
          title: 'AI Product Implementation',
          description: 'Experience building AI products from 0 to 1, transforming AI capabilities into actual business value.'
        },
        crossFunctional: {
          title: 'Cross-border Collaboration',
          description: 'Led product projects across 6 countries with 100+ team members, excelling in cross-cultural communication.'
        },
        rapidExecution: {
          title: 'Full-Stack Thinking',
          description: 'Combined experience in user growth, operations, monetization, and risk management for holistic product planning.'
        },
        riskMitigation: {
          title: 'Risk Control & Data Governance',
          description: 'Focus on data authenticity and business health with hands-on experience in risk strategy implementation.'
        },
        scalable: {
          title: 'Rapid Learning',
          description: 'Schwarzman Scholar with cross-industry transition experience, capable of quickly entering new domains and delivering results.'
        }
      }
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      work: '项目',
      education: '教育',
      honors: '荣誉',
      experience: '经历',
      services: '能力',
      contact: '联系',
      resume: '简历'
    },
    hero: {
      title: '邹雨珈 / Daisy',
      subtitle: '跨境电商产品经理 | 清华苏世民学者',
      description: '专注跨境电商用户增长与AI产品落地，驱动东南亚6国业务增长',
      location: '中国杭州',
      company: 'Lazada（阿里巴巴国际）',
      availability: '开放新机会',
      yearsExperience: '2+',
      usersImpacted: '110万+',
      efficiencyBoost: '37%',
      experienceDesc: '产品与运营经验',
      usersDesc: '频道日活用户（东南亚6国）',
      efficiencyDesc: '频道DAU增长幅度',
      viewWork: '查看项目',
      getInTouch: '联系我'
    },
    about: {
      title: '关于我',
      description: '跨境电商产品经理，在用户增长、AI产品落地和数据驱动运营方面拥有深度专业知识。',
      skills: ['产品管理', '用户增长', 'AI产品', '数据分析', '跨职能领导'],
      highlights: [
        {
          title: '数据驱动增长',
          description: '通过系统性的用户获取和留存策略实现37%的DAU增长。'
        },
        {
          title: 'AI产品创新',
          description: '主导AI驱动的产品计划，转变用户体验和运营效率。'
        }
      ]
    },
    work: {
      title: '精选项目',
      description: '展示我在产品管理和用户增长方面专业能力的精选项目。',
      projects: [
        {
          title: 'Lazmall频道增长',
          description: '主导Lazmall在东南亚6国的用户获取和留存',
          tech: ['产品策略', '用户增长', '数据分析', 'A/B测试'],
          metrics: ['37% DAU增长', '110万+用户', '6个国家']
        }
      ]
    },
    education: {
      title: '教育背景',
      description: '在中美顶尖院校的管理学、新闻学和商科学习经历。',
      positions: {
        tsinghua: {
          school: '清华大学苏世民书院',
          degree: '管理学硕士',
          period: '2024.08 - 2025.06',
          location: '北京',
          highlights: [
            '全额奖学金（录取率3%，140/4000+申请者）',
            '专注于全球管理与领导力',
            '跨文化团队协作项目经验'
          ]
        },
        ruc: {
          school: '中国人民大学',
          degree: '国际新闻 & 英语双学位',
          period: '2020.09 - 2024.06',
          location: '北京',
          highlights: [
            '双学位优秀毕业生',
            '新闻传播学院优秀学生',
            '英语专业八级证书'
          ]
        },
        ucla: {
          school: '加州大学洛杉矶分校',
          degree: '商科交换项目',
          period: '2023.01 - 2023.06',
          location: '洛杉矶',
          highlights: [
            'Anderson商学院交换生',
            '跨文化商业案例分析',
            '国际市场营销项目'
          ]
        }
      }
    },
    honors: {
      title: '荣誉奖项',
      description: '在学术、专业和领导力方面获得的重要认可。',
      totalCount: '30+',
      totalLabel: '项荣誉奖项',
      categories: {
        national: '国家级荣誉',
        academic: '学术奖项',
        professional: '专业认证',
        leadership: '领导力奖项'
      },
      items: {
        national: [
          '清华大学苏世民学者（全额奖学金）',
          '国家励志奖学金',
          '全国大学生英语竞赛一等奖',
          '中国大学生计算机设计大赛国家二等奖'
        ],
        academic: [
          '中国人民大学优秀毕业生',
          '新闻传播学院优秀学生',
          '专业课程成绩前5%',
          '英语专业八级证书',
          '雅思8.0分',
          '托福110分'
        ],
        professional: [
          'Google Analytics认证',
          'Facebook Blueprint认证',
          '产品经理专业认证（NPDP）',
          '数据分析师认证',
          'Scrum Master认证'
        ],
        leadership: [
          '学生会主席',
          '社团联合会副主席',
          '志愿服务优秀个人',
          '社会实践先进个人',
          '创新创业大赛优秀团队负责人'
        ]
      }
    },
    experience: {
      title: '工作经历',
      description: '在产品管理和跨境电商领域的专业历程。',
      positions: [
        {
          title: '产品经理',
          company: 'Lazada（阿里巴巴国际）',
          period: '2025.06 - 至今',
          location: '中国杭州',
          achievements: [
            '主导Lazmall频道在东南亚6国的用户增长',
            '通过综合获取策略实现37%的DAU增长',
            '管理跨多国的100+成员跨职能团队'
          ]
        }
      ]
    },
    services: {
      title: '核心能力',
      description: '我为产品和业务挑战带来的核心能力。',
      items: [
        {
          title: '产品策略',
          description: '端到端的产品规划和执行，专注于以用户为中心的设计。'
        },
        {
          title: '用户增长',
          description: '数据驱动的获取和留存策略，可跨市场扩展。'
        }
      ]
    },
    contact: {
      title: '联系我',
      description: '欢迎交流产品管理、用户增长、AI产品或跨境电商相关话题。期待与你建立连接。',
      email: '邮箱',
      wechat: '微信',
      linkedin: '领英',
      github: 'GitHub',
      footer: '© 2026 邹雨珈 (Daisy)。清华苏世民学者 | 跨境电商产品经理。'
    },
    benefits: {
      title: '为什么选择与我合作',
      description: '我在每个项目中带来的核心价值。',
      readyTitle: '期待合作？',
      readyDesc: '欢迎探讨如何用数据驱动增长、用AI重塑运营，一起打造有影响力的产品。',
      startProject: '开始交流',
      scheduleCall: '预约沟通',
      items: {
        conversion: {
          title: '数据驱动',
          description: '每个产品决策都基于数据归因和A/B测试验证，追求可量化的业务成果。'
        },
        aiDriven: {
          title: 'AI产品落地',
          description: '具备从0到1的AI产品搭建经验，能将AI能力转化为实际业务价值。'
        },
        crossFunctional: {
          title: '跨国协同',
          description: '主导过跨6国、100+人协同的产品项目，擅长跨文化团队沟通与推进。'
        },
        rapidExecution: {
          title: '全链路思维',
          description: '兼具用户增长、精细化运营、商业化与风控治理经验，能从全局视角规划产品。'
        },
        riskMitigation: {
          title: '风控与数据治理',
          description: '重视数据真实性与业务健康度，有实际推动风控策略落地、清理虚假流量的经验。'
        },
        scalable: {
          title: '快速学习',
          description: '清华苏世民学者，从新闻到产品跨界转型，具备快速进入新领域并产出成果的能力。'
        }
      }
    }
  }
};

export default translations;