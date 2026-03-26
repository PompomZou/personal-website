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
        logo: string;
        achievements: string[];
      };
      alibaba: {
        position: string;
        company: string;
        period: string;
        location: string;
        logo: string;
        achievements: string[];
      };
      startup: {
        position: string;
        company: string;
        period: string;
        location: string;
        logo: string;
        achievements: string[];
      };
      bytedance: {
        position: string;
        company: string;
        period: string;
        location: string;
        logo: string;
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
          logo: 'https://logos-world.net/wp-content/uploads/2020/11/Lazada-Logo.png',
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
          logo: 'https://logos-world.net/wp-content/uploads/2020/04/Alibaba-Logo.png',
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
          logo: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=100&h=100&fit=crop&crop=center',
          achievements: [
            'Built MVP for B2B SaaS platform from concept to launch',
            'Conducted user research and competitive analysis for market positioning',
            'Worked closely with engineering teams using agile methodologies',
            'Achieved product-market fit with 80% user retention rate'
          ]
        },
        bytedance: {
          position: 'Product Operations Intern',
          company: 'ByteDance | TikTok Life Services',
          period: '2023 Aug - Dec',
          location: 'Beijing, China',
          logo: 'https://logos-world.net/wp-content/uploads/2021/08/TikTok-Logo.png',
          achievements: [
            'Led TikTok city guide content community product strategy, covering 100+ core cities nationwide',
            'Product optimization: Enhanced city POI landing page information architecture and interaction experience, increasing user engagement rate by 7.5%',
            'Traffic growth: Optimized feed flow city anchors, location lists, and city cards, achieving DAU of tens of millions for the guide community'
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
      description: 'Always open to discussing new opportunities, collaborations, and innovative projects. Reach out and let\\'s create something extraordinary together.',
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
          logo: 'https://logos-world.net/wp-content/uploads/2020/11/Lazada-Logo.png',
          achievements: [
            'ToC：Lazmall频道用增&用户运营 - 产品负责人',
            '用户增长：构建"站内引流 + 站外精准渗透 + 权益换量互补"的用增体系，打通首页引流策略、Push、达人联盟/站外广告唤端、游戏换量、频道换量等多渠道触达链路，频道日均DAU +37.5%；优化召回路径，7日留存提升10pt（55%→65%），为频道沉淀了高质量的品牌心智用户。',
            '用户运营：针对频道运营工具单一、流量承接粗放的痛点，构建了"通用权益赋能+分层人群精细化承接"的运营体系。通过权益转化提效、任务体系优化、人群承接优化等产品功能和策略，实现频道买家转化率+50%，日均GMV翻十倍，券核销GMV占比由3%→15%，任务引导order占比由11%→17%（+6pt），日均贡献华商货盘订单>1500单，实现了频道经营质量与规模增长的双重提升。',
            '网赚与商业化：主导频道网赚体系的风控治理与商业化提效。风控侧，通过黑产过滤和任务策略，节省频道预算3000$/day，提升ROI并带来增量订单+2000；商业化侧，通过接入搜索广告任务，实现网赚支出与搜索广告商业化收入的收支平衡；用户侧，搭建签到"动态奖励×人群跃迁"机制，根据用户活跃度适配奖励额度，签到人数+9%，频道次留+7pt、七留+5pt。',
            'ToB：华商AI运营工作台 - 基础架构负责人、Agent产品负责人',
            'AI运营工作台：从 0到1搭建华商 AI 运营工作台，设计标准化多级菜单体系与"BU×国家×权限等级"叉乘权限管理系统，实现覆盖东南亚 6国× 6条业务线的精细化权限管控与多业务模块一站式收口，支撑100+人跨国协同；',
            '店铺装修Agent：主导店铺精装修Agent产品方案设计与落地，构建"扒图 →选图→修图→上传"全流程 AI自动化链路，配套审核平台与监控看板，单店装修时长从30分钟压缩至5分钟，日均产能从15个提升至150个。'
          ]
        },
        alibaba: {
          position: '产品经理（实习）',
          company: '阿里巴巴淘天集团 · 信息流产品部',
          period: '2024年5月-8月',
          location: '中国杭州',
          logo: 'https://logos-world.net/wp-content/uploads/2020/04/Alibaba-Logo.png',
          achievements: [
            '独立负责淘宝首页信息流推荐理由模块的产品设计与优化，实习成果被团队长期沿用。',
            '完善前台表达：针对首页卡片推荐理由展示规范不统一、无效理由占比高的问题，主导推荐理由展示标准化与数据链路治理；通过收敛低效推荐理由、缩窄卡片高度提升屏效，优化文案、颜色与优先级排序，首页卡片曝光 PV+1.3%，CTR+0.7%；',
            '优化后台基建：重构推荐理由配置后台，简化运营配置流程并降低失误率，为后续推荐理由的规模化迭代搭建了可复用的产品基础设施。'
          ]
        },
        startup: {
          position: '产品经理（实习）',
          company: '超悦视界（北美VR健身初创公司）',
          period: '2024年11月-2025年2月',
          location: '中国北京',
          logo: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=100&h=100&fit=crop&crop=center',
          achievements: [
            '公司产品三号位，负责Meta Quest平台VR健身应用FunFitLand的用户侧产品设计，直接向创始人汇报，跨中美团队协作，全英文工作环境。',
            '独立完成搜索/筛选/收藏、锻炼记录等核心功能从0到1上线；协同研发优化网站SEO与交互结构；通过用户漏斗分析推进Guest Pass、Promo Code等裂变工具上线，用户规模从1w+增长至5w+，付费用户规模翻倍。'
          ]
        },
        bytedance: {
          position: '产品运营（实习）',
          company: '字节跳动 | 抖音生活服务部 内容社区',
          period: '2023年8月-12月',
          location: '中国北京',
          logo: 'https://logos-world.net/wp-content/uploads/2021/08/TikTok-Logo.png',
          achievements: [
            '负责抖音城市攻略内容社区的产品策略，主导城市POI落地页优化及攻略内容体系从0到1搭建，覆盖全国 100+核心城市。',
            '攻略社区优化和推广：产品侧，优化城市 POI 落地页信息架构与交互体验，用户有行为率+7.5%，停留时长与复访率显著提升；流量侧，优化feed流城市锚点、地点清单、城市卡等新功能上线，攻略社区DAU达到千万级。'
          ]
        }
      }
    },
    services: {
      title: '专业能力',
      description: '结合产品管理、数据分析与AI产品经验，构建驱动业务增长的产品解决方案。',
      techStack: '工具与技能',
      techStackDesc: '日常产品与数据工作中使用的核心工具。',
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
    }
  }
};