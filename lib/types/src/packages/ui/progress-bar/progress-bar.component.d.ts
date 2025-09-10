import type { IProgressBarAttributes, TProgressBarMode } from './types';
import { type TComponentVariantType } from './../../types';
/**
 * @param {Partial<IProgressBarAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IProgressBarAttributes}
 */
export declare function useDefaultProgressBarAttributes(customAttributes?: Partial<IProgressBarAttributes>): IProgressBarAttributes;
export declare const defaultAttributes: IProgressBarAttributes;
export declare class ProgressBar implements IProgressBarAttributes {
    value?: number;
    max?: number;
    showValue?: boolean;
    mode?: TProgressBarMode;
    type?: TComponentVariantType;
    unit?: string;
    bgSimilar?: boolean;
    constructor(customAttributes?: Partial<IProgressBarAttributes>);
}
