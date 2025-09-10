import type { ISplitterPaneAttributes } from './types';
/**
 * @param {Partial<IModalAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IModalAttributes}
 */
export declare function useDefaultSplitterPaneAttributes(customAttributes?: Partial<ISplitterPaneAttributes>): ISplitterPaneAttributes;
export declare const defaultAttributes: ISplitterPaneAttributes;
export declare class SplitterPane implements ISplitterPaneAttributes {
    size?: number;
    visible?: boolean;
    constructor(customAttributes?: Partial<ISplitterPaneAttributes>);
}
