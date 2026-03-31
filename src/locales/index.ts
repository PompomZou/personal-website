// 使用 utils/translations 作为单一翻译来源，避免重复/丢失模块
import { translations as utilsTranslations, Translation } from '../utils/translations';

export const en = utilsTranslations.en;
export const zh = utilsTranslations.zh;

export type { Translation };