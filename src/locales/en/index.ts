// 英文翻译文件汇总入口
import { navigation } from './navigation';
import { hero } from './hero';
import { about } from './about';
import { work } from './work';
import { experience } from './experience';

// 导入其他模块（从原文件中提取）
const services = {
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
};

const testimonials = {
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
};

const contact = {
  title: "Let's Connect",
  description: 'Always open to discussing new opportunities, collaborations, and innovative projects. Reach out and let\'s create something extraordinary together.',
  email: 'Email',
  wechat: 'WeChat',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  footer: '© 2024 Zou Yujia (Daisy). Crafted with passion for innovation and excellence.'
};

const benefits = {
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
};

const education = {
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
};

const honors = {
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
};

const philosophy = {
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
};

// 导出完整的英文翻译对象
export const en = {
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