export interface TechCategory {
  title: string;
  tools: string[];
}

export const techCategories: TechCategory[] = [
  {
    title: '产品工具',
    tools: ['Figma', 'Axure', 'Sketch', 'Notion', 'Miro', 'ProcessOn', 'Canva']
  },
  {
    title: '数据分析',
    tools: ['SQL', 'Python', 'Tableau', 'Excel', 'Google Analytics', 'Mixpanel']
  },
  {
    title: 'AI/技术',
    tools: ['ChatGPT', 'Claude', 'Midjourney', 'Stable Diffusion', 'GitHub', 'Jupyter']
  },
  {
    title: '项目管理',
    tools: ['Jira', 'Confluence', 'Slack', 'Teams', 'Zoom', 'Lark']
  },
  {
    title: '营销增长',
    tools: ['Facebook Ads', 'Google Ads', 'TikTok Ads', 'A/B Testing', 'CRM']
  },
  {
    title: '跨境电商',
    tools: ['Shopify', 'Amazon', 'Lazada', 'Shopee', 'PayPal', 'Stripe']
  }
];