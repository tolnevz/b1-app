import type { IDrawerAttributes } from './types';
/**
 * @param {Partial<IDrawerAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IDrawerAttributes}
 */
export declare function useDefaultDrawerAttributes(customAttributes?: Partial<IDrawerAttributes>): IDrawerAttributes;
export declare const defaultAttributes: IDrawerAttributes;
export declare class Drawer implements IDrawerAttributes {
    size?: number;
    visible?: boolean;
    constructor(customAttributes?: Partial<IDrawerAttributes>);
}
