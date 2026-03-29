export interface ProjectMetrics {
  users: string;
  impact: string;
  timeline: string;
}

export interface Project {
  id: number;
  titleKey: string;
  industryKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  metrics: ProjectMetrics;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    titleKey: 'work.projects.lazcortex.title',
    industryKey: 'work.projects.lazcortex.industry',
    descriptionKey: 'work.projects.lazcortex.description',
    image: '/projects/project1.svg',
    tags: ['AI/ML', 'Operations', 'Dashboard'],
    metrics: {
      users: '1000+',
      impact: '+37.5%',
      timeline: '6个月'
    },
    featured: true
  },
  {
    id: 2,
    titleKey: 'work.projects.creative.title',
    industryKey: 'work.projects.creative.industry',
    descriptionKey: 'work.projects.creative.description',
    image: '/projects/project2.svg',
    tags: ['Three.js', 'WebGL', 'Creative'],
    metrics: {
      users: '500K+',
      impact: '+45%',
      timeline: '4个月'
    },
    featured: false
  },
  {
    id: 3,
    titleKey: 'work.projects.optimization.title',
    industryKey: 'work.projects.optimization.industry',
    descriptionKey: 'work.projects.optimization.description',
    image: '/projects/project3.svg',
    tags: ['Analytics', 'UX', 'Conversion'],
    metrics: {
      users: '2M+',
      impact: '+25%',
      timeline: '3个月'
    },
    featured: true
  },
  {
    id: 4,
    titleKey: 'work.projects.framework.title',
    industryKey: 'work.projects.framework.industry',
    descriptionKey: 'work.projects.framework.description',
    image: '/projects/project4.svg',
    tags: ['AI Agents', 'Framework', 'Automation'],
    metrics: {
      users: '100+',
      impact: '+80%',
      timeline: '8个月'
    },
    featured: false
  }
];