import type { IModalAttributes } from './types.d';
import type { TAlign } from '../../types';
/**
 * @param {Partial<IModalAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IModalAttributes}
 */
export declare function useDefaultModalAttributes(customAttributes?: Partial<IModalAttributes>): IModalAttributes;
export declare const defaultAttributes: IModalAttributes;
export declare class Modal implements IModalAttributes {
    height?: number | string;
    width?: number | string;
    closeOnEsc?: boolean;
    visible?: boolean;
    align?: TAlign;
    modal?: boolean;
    layer?: number;
    constructor(customAttributes?: Partial<IModalAttributes>);
}
export declare function getCurrentLayer(): number;
export declare function nextLayer(): number;
export declare function prevLayer(): number;
