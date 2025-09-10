import { type IControlAttributes } from './types.d';
/**
 * Атрибуты контрола
 * @type {IControlAttributes}
 * @default { ...defaultComponentAttributes, text: '', disabled: false }
 */
export declare const defaultControlAttributes: IControlAttributes;
export declare function useControlAttributes(customAttributes?: Partial<IControlAttributes>): IControlAttributes;
