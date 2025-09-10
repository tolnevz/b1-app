import type { ILabelAttributes } from './types.d';
import type { TAlign } from '../../types';
/**
 * @param {Partial<ILabelAttributes>} customAttributes - User attributes to reduce default values
 * @returns {ILabelAttributes}
 */
export declare function useDefaultLabelAttributes(customAttributes?: Partial<ILabelAttributes>): ILabelAttributes;
export declare const defaultAttributes: ILabelAttributes;
export declare class Label implements ILabelAttributes {
    text?: string;
    align?: TAlign;
    required?: boolean;
    placementRequired?: 'left' | 'right';
    constructor(customAttributes?: Partial<ILabelAttributes>);
}
