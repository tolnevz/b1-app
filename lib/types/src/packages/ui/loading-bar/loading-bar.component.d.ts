import type { ILoadingBarAttributes } from './types';
/**
 * @param {Partial<ILoadingBarAttributes>} customAttributes - User attributes to reduce default values
 * @returns {ILoadingBarAttributes}
 */
export declare function useDefaultLoadingBarAttributes(customAttributes?: Partial<ILoadingBarAttributes>): ILoadingBarAttributes;
export declare const defaultAttributes: ILoadingBarAttributes;
