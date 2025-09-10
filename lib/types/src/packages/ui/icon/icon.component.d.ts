import type { IIconAttributes, TIconProp } from './types.d';
/**
 * @param {Partial<IIconAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IIconAttributes}
 */
export declare function useDefaultIconAttributes(customAttributes?: Partial<IIconAttributes>): IIconAttributes;
export declare const defaultAttributes: IIconAttributes;
export declare function useIcon<T extends TIconProp>(icon?: T): IIconAttributes | undefined;
