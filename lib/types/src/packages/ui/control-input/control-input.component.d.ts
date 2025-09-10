import { type IControlInputAttributes } from './types.d';
/**
 * @type {IControlInputAttributes}
 * @default {
 * readonly: false
 * required: false
 * }
 */
export declare const defaultControlInputAttributes: IControlInputAttributes;
export declare function useControlInputAttributes(customAttributes?: Partial<IControlInputAttributes>): IControlInputAttributes;
