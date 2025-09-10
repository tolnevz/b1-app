import type { ISpinnerAttributes } from './types.d';
/**
 * @param {Partial<ISpinnerAttributes>} customAttributes - User attributes to reduce default values
 * @returns {ISpinnerAttributes}
 */
export declare function useDefaultSpinnerAttributes(customAttributes?: Partial<ISpinnerAttributes>): ISpinnerAttributes;
export declare const defaultAttributes: ISpinnerAttributes;
