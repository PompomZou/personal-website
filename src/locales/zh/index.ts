// 中文翻译文件汇总入口
import { navigation } from './navigation';
import { hero } from './hero';
import { about } from './about';
import { work } from './work';
import { experience } from './experience';

// 导入其他模块（从原文件中提取）
const services = {
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
};

const testimonials = {
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
};

const contact = {
  title: '联系我',
  description: '欢迎交流产品管理、用户增长、AI产品或跨境电商相关话题。期待与你建立连接。',
  email: '邮箱',
  wechat: '微信',
  linkedin: '领英',
  github: 'GitHub',
  footer: '© 2026 邹雨珈 (Daisy)。清华苏世民学者 | 跨境电商产品经理。'
};

const benefits = {
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
};

const education = {
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
};

const honors = {
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
};

const philosophy = {
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
};

// 导出完整的中文翻译对象
export const zh = {
  nav: navigation,
  hero,
  about,
  work,
  experience,
  services,
  testimonials,
  contact,
  benefits,
  education,
  honors,
  philosophy
};