import type { IEmptyAttributes } from './types.d';
/**
 * @param {Partial<IEmptyAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IEmptyAttributes}
 */
export declare function useDefaultEmptyAttributes(customAttributes?: Partial<IEmptyAttributes>): IEmptyAttributes;
export declare const defaultAttributes: IEmptyAttributes;
export declare class Empty implements IEmptyAttributes {
    text?: string;
    visible?: boolean;
    constructor(customAttributes?: Partial<IEmptyAttributes>);
}
