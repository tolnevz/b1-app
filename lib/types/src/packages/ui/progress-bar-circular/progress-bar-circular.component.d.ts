import { type TProgressBarCircularMode } from '../progress-bar';
import type { IProgressBarCircularAttributes } from './types';
import { type TComponentVariantType } from '../../types';
/**
 * @param {Partial<IProgressBarCircularAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IProgressBarCircularAttributes}
 */
export declare function useDefaultProgressBarCircularAttributes(customAttributes?: Partial<IProgressBarCircularAttributes>): IProgressBarCircularAttributes;
export declare const defaultAttributes: IProgressBarCircularAttributes;
export declare class ProgressBarCircular implements IProgressBarCircularAttributes {
    value?: number;
    max?: number;
    showValue?: boolean;
    mode?: TProgressBarCircularMode;
    type?: TComponentVariantType;
    unit?: string;
    size?: number;
    strokeWidth?: number;
    constructor(customAttributes?: Partial<IProgressBarCircularAttributes>);
}
