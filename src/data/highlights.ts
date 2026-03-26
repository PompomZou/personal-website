export interface HighlightConfig {
  keywords: string[];
  className: string;
}

export const highlightConfigs: HighlightConfig[] = [
  {
    keywords: ['DAU', 'MAU', 'GMV', 'CTR', 'CVR', 'ARPU', 'LTV', 'CAC'],
    className: 'bg-blue-100 text-blue-800 px-1 rounded font-semibold'
  },
  {
    keywords: ['AI', 'ML', '机器学习', '人工智能', '算法', 'GPT', 'LLM'],
    className: 'bg-purple-100 text-purple-800 px-1 rounded font-semibold'
  },
  {
    keywords: ['增长', '转化', '留存', '活跃', '获客', '变现'],
    className: 'bg-green-100 text-green-800 px-1 rounded font-semibold'
  },
  {
    keywords: ['产品', '用户', '体验', '功能', '需求', '迭代'],
    className: 'bg-orange-100 text-orange-800 px-1 rounded font-semibold'
  },
  {
    keywords: ['数据', '分析', '指标', '监控', '报表', '洞察'],
    className: 'bg-indigo-100 text-indigo-800 px-1 rounded font-semibold'
  }
];

export const createHighlightFunction = (configs: HighlightConfig[]) => {
  return (text: string): string => {
    let result = text;
    
    configs.forEach(config => {
      config.keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        result = result.replace(regex, `<span class="${config.className}">$1</span>`);
      });
    });
    
    return result;
  };
};