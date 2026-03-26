// 翻译系统入口文件 - 从模块化结构导入
// 这个文件现在作为向后兼容的接口，从新的模块化翻译文件中导入内容

import { translations, Translation } from '../locales';

// 导出翻译接口类型（保持向后兼容）
export type { Translation };

// 导出翻译对象（保持向后兼容）
export { translations };

// 默认导出（如果有组件使用默认导入）
export default translations;