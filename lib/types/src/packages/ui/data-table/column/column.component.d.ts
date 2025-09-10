import { type IColumnAttributes } from './types.d';
/**
 * @param {Partial<IColumnAttributes>} customAttributes
 * @returns {IColumnAttributes}
 */
export declare function useDefaultColumnAttributes(customAttributes?: Partial<IColumnAttributes>): IColumnAttributes;
export declare const defaultAttributes: IColumnAttributes;
