import type { IFormAttributes } from './types.d';
/**
 * @param {Partial<IFormAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IFormAttributes}
 */
export declare function useDefaultFormAttributes(customAttributes?: Partial<IFormAttributes>): IFormAttributes;
export declare const defaultAttributes: IFormAttributes;
