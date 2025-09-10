import type { IFormItemAttributes } from './types';
/**
 * @param {Partial<IFormItemAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IFormItemAttributes}
 */
export declare function useDefaultFormItemAttributes(customAttributes?: Partial<IFormItemAttributes>): IFormItemAttributes;
export declare const defaultAttributes: IFormItemAttributes;
