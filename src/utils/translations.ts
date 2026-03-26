export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
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
      startup: {
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
}

export const translations: Record<'en' | 'zh', Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      experience: 'Experience',
      services: 'Services',
      contact: 'Contact',
      resume: 'Resume'
    },
    hero: {
      title: 'Zou Yujia / Daisy',
      subtitle: 'AI-Powered Product Manager & Creative Technologist',
      description: 'Transforming e-commerce operations through intelligent automation and user-centered design',
      location: 'Hangzhou, China',
      company: 'Lazada (Alibaba International)',
      availability: 'Available for Projects',
      yearsExperience: '5+',
      usersImpacted: '100K+',
      efficiencyBoost: '40%',
      experienceDesc: 'Product & AI Operations',
      usersDesc: 'Across Southeast Asia',
      efficiencyDesc: 'Through AI Implementation',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch'
    },
    about: {
      title: 'Bridging AI Innovation with Business Impact',
      description: "I'm a Product Manager at Lazada (Alibaba International) with a passion for transforming complex business challenges into elegant, AI-powered solutions. My unique blend of technical creativity and strategic thinking drives measurable results across e-commerce operations.",
      whatSetsApart: 'What Sets Me Apart',
      aiMindset: 'AI-First Mindset:',
      aiMindsetDesc: 'Leading development of LazCortex, an AI operations workbench serving 100K+ merchants',
      creativeTech: 'Creative Technologist:',
      creativeTechDesc: 'Exploring Three.js and WebGL to create immersive user experiences',
      crossCultural: 'Cross-Cultural Leader:',
      crossCulturalDesc: 'Managing diverse teams across China and Southeast Asia markets',
      dataDriver: 'Data-Driven Decision Maker:',
      dataDriverDesc: 'Every product decision backed by user research and analytics',
      collaborate: "Let's Collaborate",
      highlights: {
        experience: 'Years Experience',
        experienceDesc: 'Product Management & AI Operations',
        users: 'Users Impacted',
        usersDesc: 'Across Southeast Asia',
        efficiency: 'Efficiency Gain',
        efficiencyDesc: 'Through AI Implementation',
        conversion: 'Conversion Boost',
        conversionDesc: 'UX Optimization Results'
      }
    },
    work: {
      title: 'Featured Work',
      description: 'A selection of impactful projects that demonstrate my expertise in AI operations, product strategy, and creative technology solutions.',
      featured: 'Featured',
      viewAll: 'View All Projects',
      projects: {
        lazcortex: {
          title: 'LazCortex AI Operations',
          industry: 'E-commerce',
          description: 'AI-powered operations workbench for Lazada, streamlining seller management and automated decision-making processes.',
          users: '100K+ merchants',
          impact: '40% efficiency gain',
          timeline: '18 months'
        },
        creative: {
          title: 'Creative Coding Portfolio',
          industry: 'Creative Tech',
          description: 'Interactive WebGL experiences using Three.js, showcasing the intersection of technology and art.',
          users: '10K+ visitors',
          impact: '95% engagement',
          timeline: '6 months'
        },
        optimization: {
          title: 'E-commerce Optimization Suite',
          industry: 'Retail',
          description: 'Comprehensive analytics and optimization tools for improving conversion rates and user experience.',
          users: '50K+ sellers',
          impact: '25% conversion boost',
          timeline: '12 months'
        },
        framework: {
          title: 'AI Agent Framework',
          industry: 'Technology',
          description: 'Modular framework for building and deploying AI agents across various business applications.',
          users: '15+ teams',
          impact: '60% dev time saved',
          timeline: '9 months'
        }
      }
    },
    experience: {
      title: 'Experience',
      description: 'My journey in product management and technology, building impactful solutions for millions of users across Asia-Pacific.',
      positions: {
        lazada: {
          position: 'Senior Product Manager',
          company: 'Lazada (Alibaba International)',
          period: '2022 - Present',
          location: 'Hangzhou, China',
          achievements: [
            'Led development of LazCortex AI Operations Workbench, improving operational efficiency by 40%',
            'Managed cross-functional teams of 15+ engineers and designers',
            'Implemented AI-driven seller management systems serving 100K+ merchants',
            'Drove product strategy for Southeast Asian e-commerce operations'
          ]
        },
        alibaba: {
          position: 'Product Manager',
          company: 'Alibaba Group',
          period: '2020 - 2022',
          location: 'Hangzhou, China',
          achievements: [
            'Designed and launched merchant onboarding platform with 95% completion rate',
            'Collaborated with data science teams to build predictive analytics tools',
            'Optimized user experience flows resulting in 25% increase in conversion',
            'Mentored junior product managers and established PM best practices'
          ]
        },
        startup: {
          position: 'Associate Product Manager',
          company: 'Tech Startup',
          period: '2019 - 2020',
          location: 'Shanghai, China',
          achievements: [
            'Built MVP for B2B SaaS platform from concept to launch',
            'Conducted user research and competitive analysis for market positioning',
            'Worked closely with engineering teams using agile methodologies',
            'Achieved product-market fit with 80% user retention rate'
          ]
        }
      }
    },
    services: {
      title: 'What I Do',
      description: 'Combining product management expertise with creative technology to build innovative solutions that drive business impact.',
      techStack: 'Tech Stack',
      techStackDesc: 'Tools and technologies I use to bring ideas to life.',
      items: {
        aiOperations: {
          title: 'AI Operations',
          description: 'Design and implement AI-powered operational systems that scale business processes and improve efficiency.'
        },
        productGrowth: {
          title: 'Product Growth',
          description: 'Data-driven product strategies that optimize user experience and drive sustainable business growth.'
        },
        creativeCoding: {
          title: 'Creative Coding',
          description: 'Interactive experiences using Three.js, WebGL, and modern web technologies for engaging user interfaces.'
        },
        processOptimization: {
          title: 'Process Optimization',
          description: 'Streamline workflows and automate repetitive tasks to maximize team productivity and output quality.'
        }
      }
    },
    testimonials: {
      title: 'What Colleagues Say',
      description: 'Feedback from team members and collaborators across different projects and companies.',
      readyTitle: 'Ready to Work Together?',
      readyDesc: "Let's discuss how we can create exceptional products that drive real business impact.",
      startConversation: 'Start a Conversation',
      items: {
        sarah: {
          name: 'Sarah Chen',
          role: 'Engineering Director',
          company: 'Lazada',
          content: 'Daisy has an exceptional ability to translate complex AI concepts into practical business solutions. Her leadership on LazCortex transformed our operational efficiency.'
        },
        michael: {
          name: 'Michael Zhang',
          role: 'VP of Product',
          company: 'Alibaba International',
          content: 'Working with Daisy is a masterclass in product strategy. She combines analytical rigor with creative problem-solving in ways that consistently deliver results.'
        },
        lisa: {
          name: 'Lisa Wang',
          role: 'UX Research Lead',
          company: 'Tech Startup',
          content: "Daisy's user-centric approach and attention to detail elevated our product experience. Her collaborative style makes cross-functional work seamless."
        }
      }
    },
    contact: {
      title: "Let's Connect",
      description: 'Always open to discussing new opportunities, collaborations, and innovative projects. Reach out and let\'s create something extraordinary together.',
      email: 'Email',
      wechat: 'WeChat',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      footer: '© 2024 Zou Yujia (Daisy). Crafted with passion for innovation and excellence.'
    },
    benefits: {
      title: 'Why Work With Me',
      description: 'The unique value I bring to every project and collaboration.',
      readyTitle: 'Ready to Build Something Amazing?',
      readyDesc: "Let's discuss how we can work together to bring your product vision to life with the power of AI and creative technology.",
      startProject: 'Start a Project',
      scheduleCall: 'Schedule a Call',
      items: {
        conversion: {
          title: 'Conversion-Focused',
          description: 'Every decision backed by data and user research to maximize business impact and ROI.'
        },
        aiDriven: {
          title: 'AI-Driven Innovation',
          description: 'Leverage cutting-edge AI technologies to solve complex operational challenges.'
        },
        crossFunctional: {
          title: 'Cross-Functional Leadership',
          description: 'Proven ability to align diverse teams and stakeholders toward common goals.'
        },
        rapidExecution: {
          title: 'Rapid Execution',
          description: 'From concept to launch in record time without compromising on quality.'
        },
        riskMitigation: {
          title: 'Risk Mitigation',
          description: 'Thorough planning and testing to ensure smooth product launches and operations.'
        },
        scalable: {
          title: 'Scalable Solutions',
          description: 'Build systems and processes that grow with your business needs.'
        }
      }
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      work: '作品',
      experience: '经历',
      services: '服务',
      contact: '联系',
      resume: '简历'
    },
    hero: {
      title: '邹雨佳 / Daisy',
      subtitle: 'AI驱动的产品经理 & 创意技术专家',
      description: '通过智能自动化和以用户为中心的设计，变革电商运营',
      location: '中国杭州',
      company: 'Lazada（阿里巴巴国际）',
      availability: '可接项目',
      yearsExperience: '5+',
      usersImpacted: '10万+',
      efficiencyBoost: '40%',
      experienceDesc: '产品与AI运营经验',
      usersDesc: '覆盖东南亚地区',
      efficiencyDesc: '通过AI实施提升',
      viewWork: '查看作品',
      getInTouch: '联系我'
    },
    about: {
      title: '连接AI创新与商业价值',
      description: '我是Lazada（阿里巴巴国际）的产品经理，专注于将复杂的商业挑战转化为优雅的AI驱动解决方案。我独特的技术创造力与战略思维相结合，在电商运营中推动可衡量的成果。',
      whatSetsApart: '我的独特优势',
      aiMindset: 'AI优先思维：',
      aiMindsetDesc: '主导开发LazCortex AI运营工作台，服务10万+商家',
      creativeTech: '创意技术专家：',
      creativeTechDesc: '探索Three.js和WebGL，创造沉浸式用户体验',
      crossCultural: '跨文化领导者：',
      crossCulturalDesc: '管理中国和东南亚市场的多元化团队',
      dataDriver: '数据驱动决策者：',
      dataDriverDesc: '每个产品决策都基于用户研究和数据分析',
      collaborate: '开始合作',
      highlights: {
        experience: '年工作经验',
        experienceDesc: '产品管理与AI运营',
        users: '用户影响',
        usersDesc: '覆盖东南亚地区',
        efficiency: '效率提升',
        efficiencyDesc: '通过AI实施',
        conversion: '转化提升',
        conversionDesc: 'UX优化成果'
      }
    },
    work: {
      title: '精选作品',
      description: '展示我在AI运营、产品策略和创意技术解决方案方面专业能力的影响力项目精选。',
      featured: '精选',
      viewAll: '查看所有项目',
      projects: {
        lazcortex: {
          title: 'LazCortex AI运营平台',
          industry: '电子商务',
          description: 'Lazada的AI驱动运营工作台，简化商家管理和自动化决策流程。',
          users: '10万+商家',
          impact: '40%效率提升',
          timeline: '18个月'
        },
        creative: {
          title: '创意编程作品集',
          industry: '创意科技',
          description: '使用Three.js的交互式WebGL体验，展示技术与艺术的交融。',
          users: '1万+访客',
          impact: '95%参与度',
          timeline: '6个月'
        },
        optimization: {
          title: '电商优化套件',
          industry: '零售',
          description: '全面的分析和优化工具，提升转化率和用户体验。',
          users: '5万+卖家',
          impact: '25%转化提升',
          timeline: '12个月'
        },
        framework: {
          title: 'AI智能体框架',
          industry: '技术',
          description: '用于构建和部署AI智能体的模块化框架，适用于各种商业应用。',
          users: '15+团队',
          impact: '60%开发时间节省',
          timeline: '9个月'
        }
      }
    },
    experience: {
      title: '工作经历',
      description: '我在产品管理和技术领域的历程，为亚太地区数百万用户构建有影响力的解决方案。',
      positions: {
        lazada: {
          position: '高级产品经理',
          company: 'Lazada（阿里巴巴国际）',
          period: '2022年至今',
          location: '中国杭州',
          achievements: [
            '主导开发LazCortex AI运营工作台，运营效率提升40%',
            '管理15+工程师和设计师的跨职能团队',
            '实施AI驱动的商家管理系统，服务10万+商家',
            '推动东南亚电商运营的产品策略'
          ]
        },
        alibaba: {
          position: '产品经理',
          company: '阿里巴巴集团',
          period: '2020-2022年',
          location: '中国杭州',
          achievements: [
            '设计并推出商家入驻平台，完成率达95%',
            '与数据科学团队合作构建预测分析工具',
            '优化用户体验流程，转化率提升25%',
            '指导初级产品经理并建立PM最佳实践'
          ]
        },
        startup: {
          position: '助理产品经理',
          company: '科技创业公司',
          period: '2019-2020年',
          location: '中国上海',
          achievements: [
            '从概念到上线构建B2B SaaS平台MVP',
            '进行用户研究和竞品分析以确定市场定位',
            '与工程团队密切合作，采用敏捷开发方法',
            '实现产品市场契合，用户留存率达80%'
          ]
        }
      }
    },
    services: {
      title: '我的服务',
      description: '结合产品管理专业知识与创意技术，构建推动商业影响的创新解决方案。',
      techStack: '技术栈',
      techStackDesc: '我用来实现想法的工具和技术。',
      items: {
        aiOperations: {
          title: 'AI运营',
          description: '设计和实施AI驱动的运营系统，扩展业务流程并提高效率。'
        },
        productGrowth: {
          title: '产品增长',
          description: '数据驱动的产品策略，优化用户体验并推动可持续的业务增长。'
        },
        creativeCoding: {
          title: '创意编程',
          description: '使用Three.js、WebGL和现代Web技术创造引人入胜的交互体验。'
        },
        processOptimization: {
          title: '流程优化',
          description: '简化工作流程并自动化重复任务，最大化团队生产力和输出质量。'
        }
      }
    },
    testimonials: {
      title: '同事评价',
      description: '来自不同项目和公司的团队成员和合作伙伴的反馈。',
      readyTitle: '准备合作了吗？',
      readyDesc: '让我们讨论如何共同创造推动真正商业影响的卓越产品。',
      startConversation: '开始对话',
      items: {
        sarah: {
          name: '陈莎拉',
          role: '工程总监',
          company: 'Lazada',
          content: 'Daisy具有将复杂AI概念转化为实用商业解决方案的卓越能力。她在LazCortex项目上的领导力改变了我们的运营效率。'
        },
        michael: {
          name: '张迈克',
          role: '产品副总裁',
          company: '阿里巴巴国际',
          content: '与Daisy合作是产品策略的大师课。她将分析严谨性与创造性问题解决相结合，始终交付成果。'
        },
        lisa: {
          name: '王丽莎',
          role: 'UX研究负责人',
          company: '科技创业公司',
          content: 'Daisy以用户为中心的方法和对细节的关注提升了我们的产品体验。她的协作风格使跨职能工作变得无缝。'
        }
      }
    },
    contact: {
      title: '联系我',
      description: '随时欢迎讨论新机会、合作和创新项目。联系我，让我们一起创造非凡的作品。',
      email: '邮箱',
      wechat: '微信',
      linkedin: '领英',
      github: 'GitHub',
      footer: '© 2024 邹雨佳 (Daisy)。用创新和卓越的热情精心打造。'
    },
    benefits: {
      title: '为什么选择我',
      description: '我为每个项目和合作带来的独特价值。',
      readyTitle: '准备构建令人惊叹的产品？',
      readyDesc: '让我们讨论如何合作，用AI和创意技术的力量实现您的产品愿景。',
      startProject: '开始项目',
      scheduleCall: '预约通话',
      items: {
        conversion: {
          title: '转化导向',
          description: '每个决策都基于数据和用户研究，最大化商业影响和投资回报率。'
        },
        aiDriven: {
          title: 'AI驱动创新',
          description: '利用前沿AI技术解决复杂的运营挑战。'
        },
        crossFunctional: {
          title: '跨职能领导',
          description: '经验证的能力，能够协调多元化团队和利益相关者朝着共同目标努力。'
        },
        rapidExecution: {
          title: '快速执行',
          description: '从概念到上线的创纪录时间，不妥协质量。'
        },
        riskMitigation: {
          title: '风险缓解',
          description: '全面的规划和测试，确保产品发布和运营的顺利进行。'
        },
        scalable: {
          title: '可扩展解决方案',
          description: '构建随业务需求增长的系统和流程。'
        }
      }
    }
  }
};