import type { IListBoxAttributes } from './types.d';
/**
 * @param {Partial<IListBoxAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IListBoxAttributes}
 */
export declare function useDefaultListBoxAttributes(customAttributes?: Partial<IListBoxAttributes>): IListBoxAttributes;
export declare const defaultAttributes: IListBoxAttributes;
