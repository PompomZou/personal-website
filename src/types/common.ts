// 通用接口定义
export interface BaseItem {
  id: number | string;
  title: string;
  description?: string;
}

// 图标组件类型
export interface IconComponent {
  className?: string;
  size?: number;
}

// 动画延迟配置
export interface AnimationConfig {
  delay?: number;
  duration?: number;
  easing?: string;
}

// 响应式断点
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// 主题相关
export type Theme = 'light' | 'dark';

// 语言类型
export type Language = 'zh' | 'en';

// 通用状态
export type Status = 'idle' | 'loading' | 'success' | 'error';

// 尺寸规格
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// 颜色变体
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

// 对齐方式
export type Alignment = 'left' | 'center' | 'right';

// 方向
export type Direction = 'horizontal' | 'vertical';

// 位置
export type Position = 'top' | 'bottom' | 'left' | 'right';