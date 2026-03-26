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

export const translations: Record<'en' | 'zh', Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
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
          position: 'Product Manager (Intern)',
          company: 'Alibaba Taotian Group',
          period: '2024.05 - 2024.08',
          location: 'Hangzhou, China',
          achievements: [
            'Optimized Taobao homepage feed recommendation reasons, unified data pipeline and frontend standards',
            'Drove product iteration through A/B testing, achieving +1.3% exposure PV and +0.7% CTR',
            'Improved recommendation configuration backend, reducing error rates and enhancing launch efficiency',
            'Gained experience in large-scale user products and data analysis on billion-DAU platform'
          ]
        },
      startup: {
        position: 'Co-founder & Product Lead',
        company: 'SuperVision VR (Startup)',
        period: '2023 - 2024',
        location: 'Beijing, China',
        achievements: [
          'Co-founded VR startup focused on immersive educational experiences',
          'Led product development from concept to MVP launch',
          'Secured seed funding and established partnerships with educational institutions',
          'Built cross-functional team and established product development processes'
        ]
      }
      }
    },
    services: {
      title: 'What I Do',
      description: 'Combining product management expertise with creative technology to build innovative solutions that drive business impact.',
      techStack: 'Tools & Skills',
      techStackDesc: 'Core tools and technologies I use in product management and data analysis.',
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
    },
    education: {
      title: 'Education',
      description: 'Academic foundation in management and international communications, with global perspective from top institutions.',
      highlights: 'Key Highlights',
      achievements: 'Achievements',
      positions: {
        tsinghua: {
          school: 'Tsinghua University - Schwarzman Scholars',
          degree: 'Master of Management',
          period: '2024.08 - 2025.06',
          location: 'Beijing, China',
          highlights: 'Full scholarship (3% acceptance rate, 140/4000+ applicants)',
          gpa: '',
          achievements: ['Full Scholarship', 'Global Leadership Program', 'Cross-Cultural Management']
        },
        ruc: {
          school: 'Renmin University of China',
          degree: 'International Journalism & English (Double Degree)',
          period: '2020.09 - 2024.06',
          location: 'Beijing, China',
          highlights: 'GPA 3.83/4.0, Major Ranking 1/15, Overall Ranking 9/161 (Top 6%)',
          gpa: 'GPA 3.83/4.0',
          achievements: ['Beijing Outstanding Graduate', 'National Scholarship', 'Academic Excellence Award']
        },
        ucla: {
          school: 'UCLA',
          degree: 'Business Management & Marketing (Exchange)',
          period: '2024 Winter',
          location: 'Los Angeles, USA',
          highlights: 'GPA 4.0/4.0',
          gpa: 'GPA 4.0/4.0',
          achievements: ['Dean\'s List', 'International Exchange Scholar']
        }
      }
    },
    honors: {
      title: 'Honors & Awards',
      description: 'Recognition for academic excellence, creative achievements, and leadership contributions.',
      summary: '22+ National Awards & Academic Honors',
      categories: {
        national: {
          title: 'National Awards',
          count: '22+',
          items: ['National Advertising Competition Gold', 'PR Competition Silver', 'Creative Design Awards']
        },
        academic: {
          title: 'Academic Excellence',
          count: '3',
          items: ['National Scholarship', 'Beijing Outstanding Graduate', 'Academic Excellence']
        },
        recognition: {
          title: 'Leadership',
          count: '5+',
          items: ['Student Leadership Award', 'Community Service Recognition', 'Innovation Award']
        }
      }
    },
    philosophy: {
      title: 'My Product Philosophy',
      description: 'Core principles that guide my approach to product management and user experience design.',
      items: {
        dataFirst: {
          title: 'Data-Driven Decisions',
          description: 'Every product decision backed by user research, A/B testing, and quantifiable metrics to ensure measurable business impact.'
        },
        userCentric: {
          title: 'User-Centric Design',
          description: 'Deep empathy for user needs drives feature prioritization, ensuring solutions solve real problems and create genuine value.'
        },
        iterative: {
          title: 'Iterative Excellence',
          description: 'Continuous improvement through rapid prototyping, user feedback loops, and agile development methodologies.'
        }
      }
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      education: '教育',
      work: '项目',
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
      title: '用数据驱动增长，用AI重塑运营',
      description: '我是Lazada（阿里巴巴国际）的电商产品经理，独立负责覆盖东南亚6国的LazMall品牌频道增长与运营体系建设。清华苏世民学者（全额奖学金，录取率3%），中国人民大学国际新闻与英语双学位。此前在字节跳动抖音、阿里巴巴淘天担任产品经理，具备"C端增长运营 + B端AI产品 + 跨国协同"的复合能力。',
      whatSetsApart: '我的核心优势',
      aiMindset: 'AI产品落地能力：',
      aiMindsetDesc: '从0到1搭建华商AI运营工作台，主导店铺装修Agent产品规划',
      creativeTech: '数据驱动决策：',
      creativeTechDesc: '擅长数据归因与A/B测试，每个产品决策都有数据支撑',
      crossCultural: '跨国协同经验：',
      crossCulturalDesc: '主导跨6国、100+人协同的产品落地，英语流利（雅思8.0）',
      dataDriver: '全链路产品思维：',
      dataDriverDesc: '兼具用户增长、精细化运营、商业化与风控治理的复合经验',
      collaborate: '开始交流',
      highlights: {
        experience: '年产品经验',
        experienceDesc: '涵盖增长、运营与AI产品',
        users: '日活用户',
        usersDesc: '覆盖东南亚6国',
        efficiency: 'DAU增长',
        efficiencyDesc: '频道用户增长幅度',
        conversion: '券核销GMV增长',
        conversionDesc: '精细化运营成果'
      }
    },
    work: {
      title: '核心项目',
      description: '在Lazada、阿里巴巴淘天、字节跳动抖音等公司主导的产品项目，覆盖用户增长、AI产品、推荐优化等领域。',
      featured: '重点项目',
      viewAll: '查看所有项目',
      projects: {
        lazcortex: {
          title: 'Lazada LazMall 频道增长与运营体系',
          industry: '跨境电商',
          description: '独立负责覆盖东南亚6国的品牌频道增长与精细化运营体系建设，构建多渠道用户触达和分层人群承接体系，推动频道从规模扩张转向健康经营。',
          users: '110万+日活',
          impact: 'DAU +37%，日均GMV 10万+$',
          timeline: '2025至今'
        },
        creative: {
          title: '华商AI运营工作台 & 店铺装修Agent',
          industry: 'AI产品',
          description: '从0到1搭建华商AI运营工作台，定义多业务模块接入SOP，实现核心AI能力一站式收口；设计"BU×国家×权限等级"叉乘体系，支撑跨国协同。',
          users: '100+协同用户',
          impact: '多BU跨6国协同',
          timeline: '2025至今'
        },
        optimization: {
          title: '淘宝首页信息流推荐理由优化',
          industry: '电商',
          description: '统一淘宝首页信息流卡片的数据链路和前端展示标准，通过A/B测试优化推荐理由配置逻辑，提升数亿DAU级平台的用户浏览体验。',
          users: 'DAU数亿级平台',
          impact: '曝光PV +1.3%，CTR +0.7%',
          timeline: '2024'
        },
        framework: {
          title: '抖音城市POI落地页体验优化',
          industry: '本地生活',
          description: '优化抖音城市POI落地页和feed流城市入口，搭建攻略内容标签体系与质量分级模型，覆盖100+城市，提升内容生态质量与用户行为转化。',
          users: '覆盖100+城市',
          impact: '有效曝光PV +12.9%',
          timeline: '2023'
        }
      }
    },
    experience: {
      title: '工作经历',
      description: '从字节跳动到阿里巴巴再到Lazada，在头部互联网公司积累产品管理与增长运营经验。',
      positions: {
        lazada: {
          position: '电商产品经理',
          company: 'Lazada（阿里巴巴国际）',
          period: '2025年6月至今',
          location: '中国杭州',
          achievements: [
            '独立负责LazMall频道用增与运营，驱动DAU从80万增至110万（+37%），日均GMV突破10万美元',
            '搭建"分层人群精细化承接"运营体系，券核销GMV增长8.5倍，占频道GMV从3%提升至15%',
            '主动推动风控策略上线，砍掉1600单/日虚假流量，高质量订单翻倍增长（600→1300单/日）',
            '从0到1搭建华商AI运营工作台，设计跨国跨业务权限体系，支撑100+人协同项目交付'
          ]
        },
        alibaba: {
          position: '产品经理（实习）',
          company: '阿里巴巴淘天集团 · 信息流产品部',
          period: '2024年5月-8月',
          location: '中国杭州',
          achievements: [
            '负责淘宝首页信息流推荐理由优化，统一卡片数据链路和前端展示标准',
            '通过A/B测试驱动产品迭代，首页卡片曝光PV +1.3%，CTR +0.7%',
            '优化推荐理由配置后台，降低配置失误率，提升上线流程效率',
            '在DAU数亿级平台积累大规模用户产品与数据分析经验'
          ]
        },
        startup: {
          position: '联合创始人 & 产品负责人',
          company: '超悦视界（VR创业公司）',
          period: '2023年-2024年',
          location: '中国北京',
          achievements: [
            '联合创立专注沉浸式教育体验的VR创业公司',
            '主导产品从概念到MVP的全流程开发',
            '获得种子轮融资，与教育机构建立合作伙伴关系',
            '组建跨职能团队，建立产品开发流程和标准'
          ]
        }
      }
    },
    services: {
      title: '专业能力',
      description: '结合产品管理、数据分析与AI产品经验，构建驱动业务增长的产品解决方案。',
      techStack: '工具与技能',
      techStackDesc: '产品管理和数据分析工作中使用的核心工具。',
      items: {
        aiOperations: {
          title: 'AI产品规划',
          description: '从0到1规划AI产品架构，定义业务接入SOP，推动AI能力在运营场景的落地与规模化应用。'
        },
        productGrowth: {
          title: '用户增长与运营',
          description: '构建数据驱动的用户增长体系，涵盖拉新、留存、促活全链路，实现可持续的业务增长。'
        },
        creativeCoding: {
          title: '数据分析与洞察',
          description: '熟练使用SQL、Python进行数据分析，通过数据归因和A/B测试驱动产品决策，确保每个迭代有据可依。'
        },
        processOptimization: {
          title: '跨国协同管理',
          description: '具备跨6国、100+人协同的产品落地经验，擅长定义SOP和权限体系，推动复杂项目高效交付。'
        }
      }
    },
    testimonials: {
      title: '合作评价',
      description: '来自不同项目中合作伙伴的反馈与评价。',
      readyTitle: '有兴趣交流？',
      readyDesc: '欢迎探讨产品增长、AI产品落地或跨境电商领域的话题与机会。',
      startConversation: '开始对话',
      items: {
        sarah: {
          name: '陈昕',
          role: '技术负责人',
          company: 'Lazada',
          content: 'Daisy在推动AI工作台项目时展现了出色的跨团队协调能力，能把复杂的业务需求拆解成清晰的产品方案并高效推进落地。'
        },
        michael: {
          name: '张维',
          role: '运营负责人',
          company: 'Lazada',
          content: 'Daisy对数据的敏感度很高，频道增长的每一步策略都有数据支撑。她主动推动的风控治理让我们从虚假繁荣转向了健康增长。'
        },
        lisa: {
          name: '王琳',
          role: '产品导师',
          company: '阿里巴巴淘天',
          content: 'Daisy作为实习生就展现了超出预期的主动性和产品判断力，能独立推进项目从数据分析到方案落地的全流程。'
        }
      }
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
    },
    education: {
      title: '教育背景',
      description: '清华苏世民学者，人大国际新闻与英语双学位，具备全球视野和跨文化沟通能力。',
      highlights: '核心亮点',
      achievements: '主要成就',
      positions: {
        tsinghua: {
          school: '清华大学苏世民书院',
          degree: '管理学硕士',
          period: '2024.08 - 2025.06',
          location: '北京',
          highlights: '全额奖学金（录取率3%，140/4000+申请者）',
          gpa: '',
          achievements: ['全额奖学金', '全球领导力项目', '跨文化管理']
        },
        ruc: {
          school: '中国人民大学',
          degree: '国际新闻 & 英语双学位',
          period: '2020.09 - 2024.06',
          location: '北京',
          highlights: 'GPA 3.83/4.0，专业排名 1/15，院总排名 9/161（前6%）',
          gpa: 'GPA 3.83/4.0',
          achievements: ['北京市优秀毕业生', '国家奖学金', '学术优秀奖']
        },
        ucla: {
          school: 'UCLA',
          degree: 'Business Management & Marketing（交换）',
          period: '2024冬季学期',
          location: '洛杉矶',
          highlights: 'GPA 4.0/4.0',
          gpa: 'GPA 4.0/4.0',
          achievements: ['院长荣誉榜', '国际交换学者']
        }
      }
    },
    honors: {
      title: '荣誉与奖项',
      description: '学术卓越、创意成就和领导力贡献的认可。',
      summary: '22项国家级奖项 & 学术荣誉',
      categories: {
        national: {
          title: '国家级奖项',
          count: '22项',
          items: ['大广赛全国一等奖', '公关大赛全国二等奖', '创意设计奖']
        },
        academic: {
          title: '学术荣誉',
          count: '3项',
          items: ['国家奖学金', '北京市优秀毕业生', '学术优秀奖']
        },
        recognition: {
          title: '领导力认可',
          count: '5项+',
          items: ['学生领导力奖', '社区服务认可', '创新奖']
        }
      }
    },
    philosophy: {
      title: '我的产品理念',
      description: '指导我进行产品管理和用户体验设计的核心原则。',
      items: {
        dataFirst: {
          title: '数据驱动决策',
          description: '每个产品决策都基于用户研究、A/B测试和可量化指标，确保可衡量的业务影响。'
        },
        userCentric: {
          title: '用户中心设计',
          description: '对用户需求的深度共情驱动功能优先级，确保解决方案解决真实问题并创造真正价值。'
        },
        iterative: {
          title: '迭代追求卓越',
          description: '通过快速原型、用户反馈循环和敏捷开发方法论持续改进。'
        }
      }
    }
  }
};