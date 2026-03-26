import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Size, ColorVariant, Alignment } from './common';

// 按钮组件类型
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: Size;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

// 卡片组件类型
export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  background?: 'white' | 'gray' | 'transparent';
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

// 徽章组件类型
export interface BadgeProps {
  children: ReactNode;
  variant?: ColorVariant;
  size?: Size;
  className?: string;
  rounded?: boolean;
}

// 章节标题组件类型
export interface SectionTitleProps {
  title: string;
  description?: string;
  align?: Alignment;
  size?: Size;
  className?: string;
  subtitle?: string;
}

// 服务项目类型
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

// 项目展示类型
export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  link?: string;
  metrics?: {
    users?: string;
    impact?: string;
    timeline?: string;
  };
}

// 工作经历类型
export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  logo?: string;
}

// 技能分类类型
export interface SkillCategory {
  title: string;
  skills: string[];
  icon?: LucideIcon;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// 推荐评价类型
export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

// 联系方式类型
export interface ContactMethod {
  type: 'email' | 'phone' | 'social' | 'location';
  label: string;
  value: string;
  icon: LucideIcon;
  link?: string;
  copyable?: boolean;
}