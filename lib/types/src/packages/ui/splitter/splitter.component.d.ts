import type { ISplitterAttributes } from './types.d';
import { type TDirection } from '../../types';
/**
 * @param {Partial<IModalAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IModalAttributes}
 */
export declare function useDefaultSplitterAttributes(customAttributes?: Partial<ISplitterAttributes>): ISplitterAttributes;
export declare const defaultAttributes: ISplitterAttributes;
export declare class Splitter implements ISplitterAttributes {
    direction?: TDirection;
    minSize?: number;
    visible?: boolean;
    constructor(customAttributes?: Partial<ISplitterAttributes>);
}
