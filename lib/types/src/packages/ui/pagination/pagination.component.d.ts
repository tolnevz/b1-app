import type { IPaginationAttributes } from './types.d';
/**
 * @param {Partial<IPaginationAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IPaginationAttributes}
 */
export declare function useDefaultPaginationAttributes(customAttributes?: Partial<IPaginationAttributes>): IPaginationAttributes;
export declare const defaultAttributes: IPaginationAttributes;
