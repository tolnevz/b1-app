import type { IDropDownComponentAttributes } from './types';
/**
 * @param {Partial<IDropDownComponentAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IDropDownComponentAttributes}
 */
export declare function useDefaultDropDownComponentAttributes(customAttributes?: Partial<IDropDownComponentAttributes>): IDropDownComponentAttributes;
export declare const defaultAttributes: IDropDownComponentAttributes;
